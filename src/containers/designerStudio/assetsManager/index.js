import React from "react"
import { connect } from "react-redux"
import _ from 'lodash'

import "./index.scss"
import Request from '../../../request'
import _grapesEditor from "../../../components/utils/grapesEditor"
// import { Select } from '../../../components/ui/editor'
import { undo, redo, setEditorStyleData } from "../../../reducers/actions/editorHistoryActions"
import { setPseudoClass, updateAssets, closeAssets } from "../../../reducers/actions/editor"
import { customEvents } from '../../../components/utils/grapesEditor/styleManager'
import Icons from '../../../assets/Icons'
import editor from "../../../reducers/editor"

class AssetsManager extends React.Component {
    constructor(props) {
        super(props);
        this.uploadBtn = React.createRef()
    }
    state = {
        assets: this.props.assets,
        loading: false,
        selected: ''
    }
    componentDidMount() {
        this.addImageDragDropListner()
        if (this.props.imageAssetsTarget && (this.state.selected != this.props.imageAssetsTarget.attributes.src)) {
            this.setState({ selected: this.props.imageAssetsTarget.attributes.src })
        }
    }
    componentDidUpdate(prevProps) {
        console.log(this.props.assets)
        if (this.props.assets && JSON.stringify(prevProps.assets) != JSON.stringify(this.props.assets)) {
            console.log('updated')
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
        let imageAssetsTarget = this.props.imageAssetsTarget
        this.setState({ selected: value }, () => {
            console.log('pppppppppppp', this.props.imageAssetsTarget)
            imageAssetsTarget && imageAssetsTarget.set('src', value)
        })

    }
    handleUpload = async (e, mouseDrop) => {
        let { dispatch, assets } = this.props
        console.log('uploading')
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
        console.log(files, 'files printed')
        this.setState({ loading: true })
        let form = new FormData()
        form.append('file', files[0])
        form.append('upload_preset', 'ybygtzty')
        const apiRequest = await Request.uploadImage(form)
        console.log(apiRequest, 'apiRequest')
        this.setState({ loading: false })
        if (!apiRequest.secure_url) {
            return
        }
        assets.image.push(apiRequest.secure_url)
        dispatch(updateAssets(assets))
        this.setState({ assets })
    }
    handleClose = () => {
        const { dispatch, assets } = this.props
        dispatch(closeAssets())
    }
    render() {
        const { assets, loading, selected } = this.state
        const { assetsManager } = this.props
        return (
            <div className={'assets-manager'} onClick={(e) => {
                if (e.target.className == 'assets-manager') {
                    this.handleClose()
                }
            }}>
                <div className={'assets-modal'}>
                    <Icons.ModalCross style={{ width: '18px', height: '18px' }} onClick={this.handleClose} />
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
                                    ref={this.uploadBtn}
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
                    <div className={'main-container'}>
                        {/* <input /> */}
                        {
                            assets.image.map(item => {
                                // return <img style={{ width: '100px' }} src={item} placeholder={'none'} />
                                return (
                                    <div
                                        className={'image-container'}
                                        style={{
                                            backgroundImage: `url(${item})`,
                                            backgroundPosition: 'center',
                                            backgroundAttachment: 'scroll',
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                        onClick={() => { this.handleSelect(item) }}
                                    >
                                        {selected == item && <Icons.CircularTick style={{ width: '20px', height: '20px' }} className={'selected-icon'} />}
                                    </div>
                                )
                            })
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
        assets: editor.assets,
        imageAssetsTarget: editor.imageAssetsTarget,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetsManager)
