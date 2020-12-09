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
import { setS3Dir, updateAssets, setLocalFonts } from "../../../reducers/actions/userActions"
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
        styleTag: null,
        fontSearch: '',
        invalidUrl: false,
        localFontsArr: null
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
                    this.createLocalFonts()
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
            this.setState({ invalidUrl: true })
            return
        }
        assets.image.push(value)
        dispatch(updateAssets(assets))
        this.setState({ assets, inputUrl: '', invalidUrl: false }, () => {
            let allImages = document.querySelector('.all-images')
            allImages.scrollTop = allImages.scrollHeight
        })
    }
    handleAddFont = (fontObj) => {
        let { dispatch, localFonts } = this.props
        localFonts.push(fontObj)
        dispatch(setLocalFonts(localFonts))
        this.createLocalFonts()
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
    handleFontsUpload = async (e, mouseDrop) => {
        let { dispatch, assets, userS3Dir } = this.props
        let files = []
        files = e.target.files
        if (files && files.length == 0) {
            return
        }
        if (files[0].size > 2000000) {
            console.log('please upload a file smaller than 2MB')
            return
        }
        // handle multiple files upload instead of one
        this.setState({ loading: true })
        _.each(files, (file, index) => {
            if (!['woff', 'woff2', 'ttf'].includes(/(?:\.([^.]+))?$/.exec(file.name)[1])) {
                console.log('Invalid File format')
                return
            }
            let s3Dir = userS3Dir
            if (!s3Dir) {
                // create new userS3Dir
                s3Dir = shortid.generate()  //replace this with user _id
                dispatch(setS3Dir(s3Dir))
            }
            _s3.uploadFile(file, s3Dir + '/fonts', (resp) => {
                if (index == files.length - 1) {
                    this.setState({ loading: false })
                }
                if (resp.error) {
                    if (resp.message) {
                        console.error(resp.message)
                    }
                    return
                }
                // this.handleAddImage(resp.data.location)
                let payload = {
                    family: file.name.replace(/(?:\.([^.]+))?$/, ''),
                    url: resp.data.location
                }
                this.handleAddFont(payload)
            })
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
    toggleFont = (family, type = 'google') => {
        let { assets, dispatch } = this.props
        let { fonts } = assets
        if (type == 'google') {
            let index = fonts.indexOf(family)
            if (index == -1) {
                // not present
                fonts.unshift(family)
            } else {
                fonts.splice(index, 1)
            }
            dispatch(updateAssets(assets))
            this.mapLimitedFonts(this.state.lastFontKey)
            return
        }
        // local
        let index = _.findIndex(fonts, (item) => typeof (item) != 'string' && item.family == family.family)
        if (index == -1) {
            // not present
            fonts.unshift(family)
        } else {
            fonts.splice(index, 1)
        }
        dispatch(updateAssets(assets))
        this.createLocalFonts()
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
            return
        }
        findPhrase = '/* local fonts */\n'
        let indices = this.getIndicesOf(findPhrase, str)
        if (indices.length == 0) {
            // not present yet
            str = str + `\n\t/* local fonts */\n`
            indices = this.getIndicesOf(findPhrase, str)
        }
        let fontObj = name
        let familyRule = fontObj.filter((item) => ['woff', 'woff2', 'ttf'].includes(/(?:\.([^.]+))?$/.exec(item.url)[1])).map(item => {
            let format = ''
            switch (/(?:\.([^.]+))?$/.exec(item.url)[1]) {
                case 'woff2':
                    format = 'format("woff2")'
                    break;
                case 'woff':
                    format = 'format("woff")'
                    break;
                case 'ttf':
                    format = 'format("truetype")'
                    break;
            }
            return `\n@font-face {
                font-family: "${item.family}";
                src: url("${item.url}") ${format};
            }\n`
        }).join('')
        str = [str.slice(0, ((indices[0] + findPhrase.length))), `${familyRule}`, str.slice((indices[0] + findPhrase.length))].join('')
        styleTag.innerHTML = str
    }
    removeFontsBlock = (name, type = 'google') => { //not in use
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
        const { styleTag, fontSearch: searchTerm } = this.state
        let resp = []
        styleTag.innerHTML = ''
        let familyArr = []
        let filteredFonts = googleFonts
        if (searchTerm.trim() != '') {
            filteredFonts = filteredFonts.filter((obj) => { return _.lowerCase(obj.family).includes(_.lowerCase(searchTerm)) })
        }
        _.each(filteredFonts, (item, key) => {
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
    createLocalFonts = () => {
        const { localFonts, assets } = this.props
        const { fontSearch: searchTerm } = this.state
        let resp = []
        // let familyArrObj = []
        let filteredFonts = localFonts
        if (searchTerm.trim() != '') {
            filteredFonts = filteredFonts.filter((obj) => { return _.lowerCase(obj.family).includes(_.lowerCase(searchTerm)) })
        }
        _.each(filteredFonts, (item, key) => {
            let imported = _.find(assets.fonts, (obj) => item.family == obj.family)
            resp[key] = (<div className={'preview-font'} style={{ fontFamily: `${item.family}` }} onClick={() => { this.toggleFont(item, 'local') }}>
                {imported && <Icons.CircularTick style={{ width: '25px', height: '25px' }} className={'selected-icon'} />}
                <div className={'preview-heading'}>Axg</div>
                <div className={'font-name'}>{item.family}</div>
            </div>)
        })
        this.importFontsBlock(filteredFonts, 'local')
        this.setState({ localFontsArr: resp })
    }
    handleScroll = (e) => {
        if (this.props.assetsManager != 'font') {
            return
        }
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) {
            e.target.scrollTop = e.target.scrollTop - 2
            this.setState({ lastFontKey: this.state.lastFontKey + 20 }, () => {
                this.mapLimitedFonts(this.state.lastFontKey)
                this.createLocalFonts()
            })
        }
    }
    render() {
        const { assets, loading, selected, inputUrl, lastFontKey, styleTag, fontSearch, invalidUrl } = this.state
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
                                        onChange={(e) => {
                                            if (e.target.value == '') {
                                                this.setState({ invalidUrl: false })
                                            }
                                            this.setState({ inputUrl: e.target.value })
                                        }}
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
                                    {invalidUrl && <div className={'warning-label'}>Please Enter a valid Image URL</div>}
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
                            assetsManager == 'font' && (<div className="fonts-actions-container">
                                <div>
                                    <label className={'assets-upload-btn'} for="ss-assets-manager-upload">
                                        {loading && <Icons.Loading style={{ width: '16px', height: '16px', marginRight: '5px' }} />}
                                    Upload Local Fonts
                                </label>
                                    <input
                                        type="file"
                                        id="ss-assets-manager-upload"
                                        accept=".woff, .woff2, .ttf"
                                        multiple
                                        style={{ display: 'none' }}
                                        onChange={this.handleFontsUpload}
                                    />
                                </div>
                                <div className="searchbox">
                                    <Icons.Search style={{ height: '16px', width: '16px' }} />
                                    <input type="text" value={fontSearch} placeholder={"Search"} onChange={(e) => {
                                        this.setState({
                                            fontSearch: e.target.value
                                        }, () => {
                                            this.mapLimitedFonts(lastFontKey)
                                            this.createLocalFonts()
                                        })
                                    }} />
                                </div>
                            </div>)
                        }
                        {
                            assetsManager == 'font' && styleTag && <div className={"font-tiles-container"}>
                                {this.state.localFontsArr && <>
                                    <div className="fonts-type">Local</div>
                                    <div className="fonts-type-divider"></div>
                                    {this.state.localFontsArr}
                                </>
                                }
                                {this.state.fontsArr && <>
                                    <div className="fonts-type">Google</div>
                                    <div className="fonts-type-divider"></div>
                                    {this.state.fontsArr}
                                </>}
                            </div>
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
        localFonts: global.localFonts,
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
