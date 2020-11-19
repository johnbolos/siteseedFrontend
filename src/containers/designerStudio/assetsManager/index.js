import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'
import shortid from 'shortid'
import isImageUrl from 'is-image-url'
import "./index.scss"
import Request from '../../../request'
import _grapesEditor from "../../../components/utils/grapesEditor"
// import { Select } from '../../../components/ui/editor'
import { undo, redo, setEditorStyleData } from "../../../reducers/actions/editorHistoryActions"
import { setPseudoClass, closeAssets, setbackgroundImage } from "../../../reducers/actions/editor"
import { setS3Dir, updateAssets } from "../../../reducers/actions/userActions"
import { customEvents } from '../../../components/utils/grapesEditor/styleManager'
import Icons from '../../../assets/Icons'
import editor from "../../../reducers/editor"
import _s3 from "../../../components/utils/s3"

class AssetsManager extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        assets: this.props.assets,
        loading: false,
        selected: '',
        inputUrl: '',
        lastFontKey: 20,
        styleTag: null
    }
    componentDidMount() {
        const { assetsManager } = this.props
        if (assetsManager == 'image' && this.props.imageAssetsTarget && (this.state.selected != this.props.imageAssetsTarget.attributes.src)) {
            this.addImageDragDropListner()
            this.setState({ selected: this.props.imageAssetsTarget.attributes.src })
        } else if (assetsManager == 'imageBackground' && this.props.backgroundImage && (this.state.selected != this.props.backgroundImage)) {
            this.addImageDragDropListner()
            this.setState({ selected: this.props.backgroundImage })
        } else if (assetsManager == 'font') {
            if (!this.state.styleTag) {
                this.setState({ styleTag: document.getElementById('style-assets-manager') }, () => {
                    this.mapLimitedFonts(this.state.lastFontKey)
                })
            }
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.assets && JSON.stringify(prevProps.assets) != JSON.stringify(this.props.assets)) {
            this.setState({ assets: this.props.assets })
        }
    }
    addImageDragDropListner = () => {
        let dropArea = document.querySelector('.img-drop-area');

        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, (e) => { dropArea.classList.add('adding-image-highlight') }, false)
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, (e) => { dropArea.classList.remove('adding-image-highlight') }, false)
        });
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, (e) => { e.preventDefault(); e.stopPropagation() }, false)
        });

        dropArea.addEventListener('drop', (e) => { this.handleUpload(e, true) }, false)
    }
    handleSelect = (value) => {
        const { assetsManager, dispatch } = this.props
        let imageAssetsTarget = this.props.imageAssetsTarget
        let backgroundImage = this.props.backgroundImage
        this.setState({ selected: value }, () => {
            if (assetsManager == 'image') {
                imageAssetsTarget && imageAssetsTarget.set('src', value)
                this.handleClose()
            } else if (assetsManager == 'imageBackground') {
                this.handleClose()
                dispatch(setbackgroundImage(value))
            }
        })
    }
    handleAddImage = (value) => {
        const { assets, dispatch } = this.props
        if (value == '' || !isImageUrl(value)) {
            return
        }
        assets.image.push(value)
        dispatch(updateAssets(assets))
        this.setState({ assets, inputUrl: '' }, () => {
            let allImages = document.querySelector('.all-images')
            allImages.scrollTop = allImages.scrollHeight
        })
    }
    handleUpload = async (e, mouseDrop) => {
        let { dispatch, assets, userS3Dir } = this.props
        let files = []
        if (mouseDrop) {
            // e.preventDefault()
            // e.stopPropagation()
            files = e.dataTransfer ? e.dataTransfer.files : []
        } else {
            files = e.target.files
        }
        if (files && files.length == 0) {
            return
        }
        if (files[0].size > 2000000) {
            console.log('please upload a file smaller than 2MB')
            return
        }
        if (!/jpeg|jpg|gif|png|svg/.test(files[0].type)) {
            console.log('Invalid File format')
            return
        }
        this.setState({ loading: true })
        let s3Dir = userS3Dir
        if (!s3Dir) {
            // create new userS3Dir
            s3Dir = shortid.generate()
            dispatch(setS3Dir(s3Dir))
        }
        _s3.uploadFile(files[0], s3Dir, (resp) => {
            this.setState({ loading: false })
            if (resp.error) {
                if (resp.message) {
                    console.error(resp.message)
                }
                return
            }
            this.handleAddImage(resp.data.location)
        })

        // this.setState({ loading: true })
        // let form = new FormData()
        // form.append('file', files[0])
        // form.append('upload_preset', 'ybygtzty')
        // const apiRequest = await Request.uploadImage(form)
        // this.setState({ loading: false })
        // if (!apiRequest.secure_url) {
        //     return
        // }
        // this.handleAddImage(apiRequest.secure_url)
    }
    handleClose = () => {
        const { dispatch, assets } = this.props
        dispatch(closeAssets())
    }
    toggleFont = (family) => {
        let { assets, dispatch } = this.props
        let { fonts } = assets
        let index = fonts.indexOf(family)
        if (index == -1) {
            // not present
            fonts.unshift(family)
        } else {
            fonts.splice(index, 1)
        }
        console.log(family, fonts)
        dispatch(updateAssets(assets))
        this.mapLimitedFonts(this.state.lastFontKey)
    }
    getIndicesOf = (searchStr, str, caseSensitive) => {
        var searchStrLen = searchStr.length;
        if (searchStrLen == 0) {
            return [];
        }
        var startIndex = 0,
            index,
            indices = [];
        if (!caseSensitive) {
            str = str.toLowerCase();
            searchStr = searchStr.toLowerCase();
        }
        while ((index = str.indexOf(searchStr, startIndex)) > -1) {
            indices.push(index);
            startIndex = index + searchStrLen;
        }
        return indices;
    }
    importFontsBlock = (name, type = 'google') => {
        let styleTag = document.getElementById('style-assets-manager')
        let str = styleTag.innerHTML, findPhrase = ''
        if (type == 'google') {
            findPhrase = 'https://fonts.googleapis.com/css?family='
        }
        let indices = this.getIndicesOf(findPhrase, str)
        if (indices.length == 0) {
            // not present yet
            str = `\n\t@import url("${'https://fonts.googleapis.com/css?family=display=swap'}");\n` + str	//14
            indices.push(15)
        }
        if (typeof (name) === 'string') {
            str = [str.slice(0, ((indices[0] + findPhrase.length))), `${name}:100,200,300,400,500,600,700,800,900|`, str.slice((indices[0] + findPhrase.length))].join('') 	// -6 due to family
        } else {
            let familyRule = name.map(val => `${val}:100,200,300,400,500,600,700,800,900|`).join('')
            str = [str.slice(0, ((indices[0] + findPhrase.length))), `${familyRule}`, str.slice((indices[0] + findPhrase.length))].join('') 	// -6 due to family
        }
        styleTag.innerHTML = str
    }
    removeFontsBlock = (name, type = 'google') => {
        const styleTag = document.getElementById('style-assets-manager')
        if (!styleTag) {
            return
        }
        let str = styleTag.innerHTML, findPhrase = ''
        if (type == 'google') {
            findPhrase = 'https://fonts.googleapis.com/css?family='
        }
        let indices = this.getIndicesOf(findPhrase, str)
        if (indices.length == 0) {
            // not present yet
            return
        }
        if (type == 'google') {
            if (typeof (name) === 'string') {
                findPhrase = `${name}:100,200,300,400,500,600,700,800,900|`
                str = str.replace(findPhrase, '')
            } else {
                name.forEach(val => {
                    findPhrase = `${val}:100,200,300,400,500,600,700,800,900|`
                    str = str.replace(findPhrase, '')
                })
            }
        }
        styleTag.innerHTML = str
    }
    mapLimitedFonts = (index) => {
        const { googleFonts, assets } = this.props
        const { styleTag } = this.state
        let resp = []
        styleTag.innerHTML = ''
        let familyArr = []
        _.each(googleFonts, (item, key) => {
            if (key >= index) {
                return false
            }
            familyArr[key] = item.family.replace(/ /gi, '+')
            let imported = assets.fonts.includes(item.family)
            resp[key] = (<div className={'preview-font'} style={{ fontFamily: `${item.family}` }} onClick={() => { this.toggleFont(item.family) }}>
                {imported && <Icons.CircularTick style={{ width: '25px', height: '25px' }} className={'selected-icon'} />}
                <div className={'preview-heading'}>Axg</div>
                <div className={'font-name'}>{item.family}</div>
            </div>)
        })
        this.importFontsBlock(familyArr)
        this.setState({ fontsArr: resp })
    }
    handleScroll = (e) => {
        if (this.props.assetsManager != 'font') {
            return
        }
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            e.target.scrollTop = e.target.scrollTop - 2
            console.log('bottom reached')
            this.setState({ lastFontKey: this.state.lastFontKey + 20 }, () => {
                this.mapLimitedFonts(this.state.lastFontKey)
            })
        }
    }
    render() {
        const { assets, loading, selected, inputUrl, lastFontKey, styleTag } = this.state
        const { assetsManager, googleFonts } = this.props
        return (
            <div className={'assets-manager'} onClick={(e) => {
                if (e.target.className == 'assets-manager') {
                    this.handleClose()
                }
            }}>
                <div className={assetsManager == 'font' ? 'font-assets-modal' : 'img-assets-modal'}>
                    <Icons.ModalCross style={{ width: '18px', height: '18px' }} onClick={this.handleClose} />
                    {
                        assetsManager != 'font' && (
                            <div className={'upload-container'}>
                                <div className={'title'}>Select Image</div>
                                <div className={'img-drop-area'}>
                                    <div className={'content'}>
                                        <div className={'content1'}>Drop files to Upload</div>
                                        <div className={'content2'}>Maximum upload file size: 2MB</div>
                                        <div className={'content3'}>or</div>
                                        {/* <div className={'upload-btn'} for="ss-assets-manager-upload">Upload Images</div> */}
                                        <label className={'assets-upload-btn'} for="ss-assets-manager-upload">
                                            {loading && <Icons.Loading style={{ width: '16px', height: '16px', marginRight: '5px' }} />}
                                    Upload Images
                                </label>
                                        <input
                                            type="file"
                                            id="ss-assets-manager-upload"
                                            accept="image/*"
                                            // multiple
                                            style={{ display: 'none' }}
                                            onChange={this.handleUpload}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        assetsManager == 'font' && (<>
                            <div className={'title'}>Fonts Library</div>
                        </>)
                    }
                    <div className={'main-container'} onScroll={this.handleScroll}>
                        {
                            assetsManager != 'font' && (<>
                                <div className={'input-container'}>
                                    <input
                                        type="text"
                                        className={'add-image-input'}
                                        placeholder={'Enter Image Web URL (http://www.image.com/path/to/the/image.jpg)'}
                                        value={inputUrl}
                                        onChange={(e) => { this.setState({ inputUrl: e.target.value }) }}
                                        onKeyDown={(e) => {
                                            if (e.key != 'Enter' || e.target.value == '') {
                                                return
                                            }
                                            this.handleAddImage(e.target.value)
                                        }}
                                    ></input>
                                    <label className={'add-image-btn'} onClick={() => { this.handleAddImage(this.state.inputUrl) }}>
                                        Add Image
                                    </label>
                                </div>
                                <div className={'all-images'}>
                                    {
                                        assets.image.map(item => {
                                            // return <img style={{ width: '100px' }} src={item} placeholder={'none'} />
                                            return (
                                                <div
                                                    className={'image-container'}
                                                    style={{
                                                        backgroundImage: `url(${item}),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg==")`,
                                                        backgroundPosition: 'center',
                                                        backgroundAttachment: 'scroll',
                                                        backgroundSize: 'cover, auto',
                                                        backgroundRepeat: 'no-repeat, repeat'
                                                    }}
                                                    onClick={() => { this.handleSelect(item) }}
                                                >
                                                    {selected == item && <Icons.CircularTick style={{ width: '20px', height: '20px' }} className={'selected-icon'} />}
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </>)
                        }
                        <style id={'style-assets-manager'}></style>
                        {
                            assetsManager == 'font' && styleTag && this.state.fontsArr
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ global, layout, templates, editor, editorHistory }) => {
    return {
        loading: global.loading,
        templates,
        assetsManager: editor.assetsManager,
        assets: global.assets,
        imageAssetsTarget: editor.imageAssetsTarget,
        backgroundImage: editor.backgroundImage,
        googleFonts: editor.googleFonts,
        userS3Dir: global.userS3Dir
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetsManager)
