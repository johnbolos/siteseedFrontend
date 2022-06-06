import React from 'react'
import _ from 'lodash'
import Async from 'async'
import { toast } from 'react-toastify'
import shortid from 'shortid'
import { setCurrentBuilderSiteId, setS3Dir, setCurrentBuilderTemplateId } from "../../reducers/actions/userActions"
import _s3 from './s3'
import { selectTemplate, setCurrentTemplate } from '../../reducers/actions/templateActions'
import { getPushPathWrapper, getPushPathWrapperWithObj } from '../../routes'
import _grapesEditor from './grapesEditor'
import Request from '../../request'
import { store } from '../../store'
import { hideLoader, showLoader } from '../../reducers/actions'

// Templates =========================================================================
import therapists from "../../assets/templates/therapists";
import landingPageTemplate from "../../assets/templates/landingPage";
import agencyGreyTemplate from "../../assets/templates/agencyGrey";
import agencyDarkTemplate from "../../assets/templates/agencyDark";
import restaurant1 from "../../assets/templates/restaurant1";
import carpentry from "../../assets/templates/carpentry";
import spa from "../../assets/templates/spa";
import event from "../../assets/templates/event";
import musician from "../../assets/templates/musician";
import blog from "../../assets/templates/blog";
import { assetsUrl } from '../../settings'
import gym from '../../assets/templates/gym'
// ===================================================================================

export const svg = (path, options = {}) => {
    const { width, height } = options
    return (<img style={{ width: width ? width : '16px', height: height ? height : '16px' }} src={`${path}`}></img>)
}

const elementDistanceToCursor = (elem, mouse) => { // get distance to element
    var b = elem.getBoundingClientRect();
    var dx = 0;
    var dy = 0;

    //Compute distance to elem in X
    if (mouse.x < b.left)
        dx = b.left - mouse.x;
    else if (mouse.x > b.right)
        dx = b.right - mouse.x;

    //Compute distance to elem in Y
    if (mouse.y < b.top)
        dy = b.top - mouse.y;
    else if (mouse.y > b.bottom)
        dy = b.bottom - mouse.y;

    return Math.floor(Math.sqrt(dx * dx + dy * dy));
}
export const closestElement = (mouse, wrapperSelector) => {
    let closestElement = null
    let minDis = 99999
    let wrapper = document.getElementById(wrapperSelector)
    HTMLCollection.prototype.every = Array.prototype.every
    wrapper.children.every((el) => {
        let dis = elementDistanceToCursor(el, mouse)
        if (dis == 0) {
            if (el.children.length == 0) {
                closestElement = el
                return false
            }
            closestElement = closestElement(mouse, el.id)
            return false
        }
        if (dis < minDis) {
            minDis = dis
            closestElement = el
        }
        return true
    })
    return closestElement
}

export const showToast = (data, cb) => {
    const { type, message } = data
    let icon = ''
    if (type) {
        switch (type) {
            case 'success':
                icon = (<i className="fa fa-check toast-icon-success" aria-hidden="true"></i>)
                break;
            case 'warning':
                icon = (<i className="fa fa-exclamation-triangle toast-icon-error" aria-hidden="true"></i>)
                break;
            case 'error':
                icon = (<i className="fa fa-exclamation-triangle toast-icon-error" aria-hidden="true"></i>)
                break;
        }
    }
    toast(<>{icon}{message}</>, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        // onOpen: () => cb && cb(),
        onClose: () => cb && cb(),
    });
}

const previewContentToArray = (contentObj, index = '') => {
    let resp = []
    _.forEach(contentObj, (item, key) => {
        if (typeof (item) === 'string' || typeof (item) === 'function') {
            let type = 'text/plain'
            if (key.includes('.html')) {
                type = "text/html"
            } else if (key.includes('.css')) {
                type = "text/css"
            }

            if (typeof (item) === 'string') {
                resp.push({ path: index, file: new File([item], key, { type }) })
            } else if (typeof (item) === 'function') {
                resp.push({ path: index, file: new File([item()], key, { type }) })
            }
        } else {
            resp = [...resp, ...previewContentToArray(item, '/' + key)]
        }
    })
    return resp
}

export const addStaticContent = (contentObj, props) => {
    return new Promise(resolve => {
        let { s3Dir, projectId, pagesStore, dispatch, currentUser, init, isPublish } = props
        // contentObj = {
        //     css: {
        //         'styles.css': `asd`
        //     },
        //     'index.html': `<body>aasddd</body>`
        // }

        let uploadsArray = previewContentToArray(contentObj)
        // s3Dir = 'Z7c_6ak5A'
        // if (!s3Dir) {
        //     // create new userS3Dir
        //     s3Dir = shortid.generate() //replace this with user _id
        //     dispatch(setS3Dir(s3Dir))
        // }

        if (!projectId) {
            projectId = 6 //replace this with project _id
        }
        if (isPublish) {
            s3Dir += `/sites/${projectId}/publish`
        } else {
            s3Dir += `/sites/${projectId}/preview`
        }
        let location = ''
        let pageNameMatch = 'index.html'
        if (!init) {
            const page = pagesStore.pages[pagesStore.currentPage]
            pageNameMatch = _.lowerCase((page.seo && page.seo.name) || page.name) + '.html'
            if (page.homePage) {
                pageNameMatch = 'index.html'
            }
        }
        Async.each(uploadsArray, (item, cb) => {
            _s3.uploadFile(item.file, s3Dir + item.path, (resp) => {
                if (resp.error) {
                    if (resp.message) {
                        console.error(resp.message)
                        showToast({ type: 'error', message: resp.message })
                    }
                }

                if (item.file.name == pageNameMatch) {
                    location = resp.data.location
                }
                cb()
            })
        }, (err) => {
            return resolve(location)
        })
    })
}

export const uploadStaticTemplateForPreview = async (payload) => {
    const { projectType, s3Dir, dispatch, pagesStore, currentUser, projectId: site_id } = payload

    let exportContent = {}
    const getTags = (templateName) => {
        const canvasConfig = _grapesEditor.canvasConfigData(templateName)
        let scripts = canvasConfig.scripts
        let styles = canvasConfig.styles
        let tags = ""
        for (let i = 0; i < scripts.length; i++) {
            tags += `<script type="text/javascript" src="${scripts[i]}"></script>`
        }
        for (let i = 0; i < styles.length; i++) {
            tags += `<link href="${styles[i]}" rel="stylesheet"></link>`
        }
        return tags
    }
    switch (projectType) {
        case "Therapists":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('therapists')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${therapists.html}
					</body>
				  </html>`,
                css: {
                    'style.css': therapists.customCss + '\n\n\n' + therapists.baseCss
                }
            }
            break;
        case "Spa and Wellness":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('spa')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${spa.html}
					</body>
				  </html>`,
                css: {
                    'style.css': spa.customCss + '\n\n\n' + spa.baseCss
                }
            }
            break;
        case "Landing Page":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('landingPage')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${landingPageTemplate.html}
					</body>
				  </html>`,
                css: {
                    'style.css': landingPageTemplate.customCss + '\n\n\n' + landingPageTemplate.baseCss
                }
            }
            break;
        case "Agency Grey":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('agencyGrey')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${agencyGreyTemplate.html}
					</body>
				  </html>`,
                css: {
                    'style.css': agencyGreyTemplate.customCss + '\n\n\n' + agencyGreyTemplate.baseCss
                }
            }
            break;
        case "Agency Dark":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('agencyDark')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${agencyDarkTemplate.html}
					</body>
				  </html>`,
                css: {
                    'style.css': agencyDarkTemplate.customCss + '\n\n\n' + agencyDarkTemplate.baseCss
                }
            }
            break;
        case "Restaurant":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('restaurant1')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${restaurant1.html}
					</body>
				  </html>`,
                css: {
                    'style.css': restaurant1.customCss + '\n\n\n' + restaurant1.baseCss
                }
            }
            break;
        case "Carpentry":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('carpentry')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${carpentry.html}
					</body>
				  </html>`,
                css: {
                    'style.css': carpentry.customCss + '\n\n\n' + carpentry.baseCss
                }
            }
            break;
        case "Event":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('event')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${event.html}
					</body>
				  </html>`,
                css: {
                    'style.css': event.customCss + '\n\n\n' + event.baseCss
                }
            }
            break;
        case "Musician":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('musician')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${musician.html}
					</body>
				  </html>`,
                css: {
                    'style.css': musician.customCss + '\n\n\n' + musician.baseCss
                }
            }
            break;
        case "Blog":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('blog')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${blog.html}
					</body>
				  </html>`,
                css: {
                    'style.css': blog.customCss + '\n\n\n' + blog.baseCss
                }
            }
            break;
        case "Wedding":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('agencyGrey')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${agencyGreyTemplate.html}
					</body>
				  </html>`,
                css: {
                    'style.css': agencyGreyTemplate.customCss + '\n\n\n' + agencyGreyTemplate.baseCss
                }
            }
            break;
        case "Gym":
            exportContent = {
                'index.html': `<!doctype html>
                      <html lang="en">
                        <head>
                        <!-- title --><title>${'Welcome'}</title><!-- End-title -->
                        <!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
                        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
                        <meta name="description" content="${''}">
                        <!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
                        ${getTags('gym')}
                        <!-- stylesheet -->
                            <link rel="stylesheet" href="./css/style.css">
                        <!-- End-stylesheet -->
                        </head>
                        <body>
                            ${gym.html}
                        </body>
                      </html>`,
                css: {
                    'style.css': gym.customCss + '\n\n\n' + gym.baseCss
                }
            }
            break;
        case "Yoga":
            exportContent = {
                'index.html': `<!doctype html>
				  <html lang="en">
					<head>
					<!-- title --><title>${'Welcome'}</title><!-- End-title -->
					<!-- meta-charset --><meta charset="utf-8"><!-- End-meta-charset -->
					<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
					<meta name="description" content="${''}">
					<!-- icon --><link rel="icon" href="${''}" /><!-- End-icon -->
					${getTags('agencyGrey')}
					<!-- stylesheet -->
						<link rel="stylesheet" href="./css/style.css">
					<!-- End-stylesheet -->
					</head>
					<body>
						${agencyGreyTemplate.html}
					</body>
				  </html>`,
                css: {
                    'style.css': agencyGreyTemplate.customCss + '\n\n\n' + agencyGreyTemplate.baseCss
                }
            }
            break;
        default:
            exportContent = {
                'index.html': '',
                css: {
                    'style.css': ''
                }
            }
            break;
    }
    const location = await addStaticContent(exportContent, { s3Dir, dispatch, pagesStore, currentUser, projectId: site_id, init: true })
    // if (location != '') { window.open(location, '_blank'); }
}

const apiContentJSON = (contentUrl, dispatch) => {
    return new Promise(async resolve => {
        dispatch(showLoader())
        // const apiRequest = await Request.test("https://siteseed-dev.s3.ap-south-1.amazonaws.com/14/sites/1/content.json")
        const apiRequest = await Request.builderContentJSON(contentUrl)
        dispatch(hideLoader())
        return resolve(apiRequest)
    })
}

const pushToBuilder = (meta, dispatch, pageManager = false) => {
    let templateName = meta.templateName
    dispatch(selectTemplate(templateName))
    dispatch(setCurrentTemplate(templateName))
    dispatch(setCurrentBuilderSiteId(meta.site_id))
    dispatch(setCurrentBuilderTemplateId(meta.template_id))
    if (pageManager) {
        dispatch(getPushPathWrapperWithObj('designerStudio', { pageManager }))
        return
    }
    dispatch(getPushPathWrapper('designerStudio'))
}

export const openTemplateInEditor = (meta, dispatch) => {
    let templateName = meta.name
    switch (templateName) {
        case "Spa and Wellness":
            templateName = 'spa'
            break;
        case "Therapists":
            templateName = 'therapists'
            break;
        case "Landing Page":
            templateName = 'landingPage'
            break;
        case "Agency Grey":
            templateName = 'agencyGrey'
            break;
        case "Agency Dark":
            templateName = 'agencyDark'
            break;
        case "Restaurant":
            templateName = 'restaurant1'
            break;
        case "Carpentry":
            templateName = 'carpentry'
            break;
        case "Event":
            templateName = 'event'
            break;
        case "Musician":
            templateName = 'musician'
            break;
        case "Wedding":
            templateName = 'agencyGrey'
            // templateName = 'wedding'
            break;
        case "Gym":
            templateName = 'gym'
            break;
        case "Yoga":
            templateName = 'agencyGrey'
            // templateName = 'yoga'
            break;
        default:
            console.error('sss.p no template with this name')
            return;
    }
    if (!meta.content_path || meta.content_path == '') {
        // check if the content_path file is empty => proceed with normal flow
        pushToBuilder({ ...meta, templateName }, dispatch)
        return
    }
    // else
    apiContentJSON(meta.content_path, dispatch).then((apiRequest) => {
        //  check if the content.json.pageManager file is empty => proceed with normal flow
        if (apiRequest.pageManager && apiRequest.pageManager.length == 0) {
            pushToBuilder({ ...meta, templateName }, dispatch)
            return
        }
        //  else use the content.json file pageManager variable for rehydrating the builder
        pushToBuilder({ ...meta, templateName }, dispatch, apiRequest.pageManager)
    })
}

export const staticJSONContent = (templateName) => {
    let sectionJSON = []
    let cssJSON = {}
    let thumbnail = ''
    console.log(templateName, 'sss.p template name')
    switch (templateName) {
        case "Spa and Wellness":
        case "spa":
            templateName = 'Spa and Wellness'
            thumbnail = `${assetsUrl}/templates/spa/wpScreenshot.png`
            sectionJSON = [
                {
                    section_name: "top_section",
                    section_title: "Top Section",
                    section_split_start: "<!-- Top section -->",
                    section_split_end: "<!--Top section end----->",
                    section_order: 1,
                },
                {
                    section_name: "about_us_section",
                    section_title: "About Us",
                    section_split_start: "<!---About us section--->",
                    section_split_end: "<!---End about us--->",
                    section_order: 2,
                },
                {
                    section_name: "our_services_section",
                    section_title: "Our Services",
                    section_split_start: "<!---Our services section--->",
                    section_split_end: "<!---End Our services--->",
                    section_order: 3,
                },
                {
                    section_name: "our_gallery_section",
                    section_title: "Our Gallary",
                    section_split_start: "<!--Start our gallery section-->",
                    section_split_end: "<!--End Gallery section--->",
                    section_order: 4,
                },
                {
                    section_name: "our_blog_section",
                    section_title: "Our Blog",
                    section_split_start: "<!--our blog section-->",
                    section_split_end: "<!--end blog section-->",
                    section_order: 5,
                },
                {
                    section_name: "our_testimonial_section",
                    section_title: "Our Testimonial",
                    section_split_start: "<!-- our testimonial section-->",
                    section_split_end: "<!--End testimonial section-->",
                    section_order: 6,
                },
            ]
            cssJSON = {
                "font-color": "#000000",
                "button-text-color": "#ffffff",
                "button-background-color": "#000000",
                "button-text-color-hover": "#ffffff",
                "button-background-color-hover": "#3b717b",
                "button-background-color-hover": "#000000",
                "font-family-header": `"Playfair Display", serif`,
                "font-family-body": `"Playfair Display", serif`,
            }
            break;
        case "Landing Page":
        case "landingPage":
            templateName = 'Landing Page'
            thumbnail = `${assetsUrl}/templates/landingPage/wpScreenshot.png`
            sectionJSON = [
                {
                    section_name: "section-2",
                    section_title: "Section 2",
                    section_split_start:
                        "<!-------------------------------------Section-2------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-2----------------------------------->",
                    section_order: 1,
                },
                {
                    section_name: "section-3",
                    section_title: "Section 3",
                    section_split_start:
                        "<!------------------------------------- Section-3----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-3----------------------------------->",
                    section_order: 2,
                },
                {
                    section_name: "section-4",
                    section_title: "Section 4",
                    section_split_start:
                        "<!------------------------------------- Section-4----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-4----------------------------------->",
                    section_order: 3,
                },
                {
                    section_name: "section-5",
                    section_title: "Section 5",
                    section_split_start:
                        "<!------------------------------------- Section-5----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-5----------------------------------->",
                    section_order: 4,
                },
                {
                    section_name: "section-6",
                    section_title: "Section 6",
                    section_split_start:
                        "<!------------------------------------- Section-6----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-6----------------------------------->",
                    section_order: 5,
                },
                {
                    section_name: "section-7",
                    section_title: "Section 7",
                    section_split_start:
                        "<!------------------------------------- Section-7----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-7----------------------------------->",
                    section_order: 6,
                },
                {
                    section_name: "section-8",
                    section_title: "Section 8",
                    section_split_start:
                        "<!------------------------------------- Section-8----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-8----------------------------------->",
                    section_order: 7,
                },
                {
                    section_name: "section-9",
                    section_title: "Section 9",
                    section_split_start:
                        "<!------------------------------------- Section-9----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-9----------------------------------->",
                    section_order: 8,
                },
                {
                    section_name: "section-10",
                    section_title: "Section 10",
                    section_split_start:
                        "<!------------------------------------- Section-10----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-10----------------------------------->",
                    section_order: 9,
                },
                {
                    section_name: "section-11",
                    section_title: "Section 11",
                    section_split_start:
                        "<!-------------------------------------Section-11----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-11----------------------------------->",
                    section_order: 10,
                },
            ]
            cssJSON = {
                "font-color": "#261D56",
                "button-text-color": "#ffffff",
                "button-background-color": "#23B682",
                "button-text-color-hover": "#ffffff",
                "button-background-color-hover": "#261D56",
                "font-family-header": `Roboto-Medium`,
                "font-family-body": `Roboto-Regular`
            }
            break;
        case "Agency Grey":
        case "agencyGrey":
            break;
        case "Agency Dark":
        case "agencyDark":
            break;
        case "Restaurant":
        case "restaurant1":
            templateName = 'Restaurant1'
            thumbnail = `${assetsUrl}/templates/restaurant1/wpScreenshot.png`
            sectionJSON = [
                {
                    section_name: "top-section",
                    section_title: "Top Section",
                    section_split_start:
                        "<!-------------------------------------top-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /top-section------------------------------------->",
                    section_order: 1,
                },
                {
                    section_name: "slider-section",
                    section_title: "Slider Section",
                    section_split_start:
                        "<!-------------------------------------slider-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /slider-section------------------------------------->",
                    section_order: 2,
                },
                {
                    section_name: "tradition-section",
                    section_title: "Tradition Section",
                    section_split_start:
                        "<!-------------------------------------tradition-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /tradition-section------------------------------------->",
                    section_order: 3,
                },
                {
                    section_name: "our-partner-section",
                    section_title: "Our Partner Section",
                    section_split_start:
                        "<!-------------------------------------our-partner-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /our-partner-section------------------------------------->",
                    section_order: 4,
                },
                {
                    section_name: "about-section",
                    section_title: "About Section",
                    section_split_start:
                        "<!-------------------------------------about-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /about-section------------------------------------->",
                    section_order: 5,
                },
                {
                    section_name: "recipie-section",
                    section_title: "Recipie Section",
                    section_split_start:
                        "<!-------------------------------------recipie-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /recipie-section------------------------------------->",
                    section_order: 6,
                },
                {
                    section_name: "gallery-section",
                    section_title: "Gallery Section",
                    section_split_start:
                        "<!-------------------------------------gallery-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /gallery-section------------------------------------->",
                    section_order: 7,
                },
                {
                    section_name: "full-recipie-section",
                    section_title: "Full Recipie Section",
                    section_split_start:
                        "<!-------------------------------------full-recipie-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /full-recipie-section------------------------------------->",
                    section_order: 8,
                },
                {
                    section_name: "inner-recipie-section",
                    section_title: "Inner Recipie Section",
                    section_split_start:
                        "<!-------------------------------------inner-recipie-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /inner-recipie-section------------------------------------->",
                    section_order: 9,
                },
                {
                    section_name: "menu-of-day-section",
                    section_title: "Menu Of Day Section",
                    section_split_start:
                        "<!-------------------------------------menu-of-day-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /menu-of-day-section------------------------------------->",
                    section_order: 10,
                },
                {
                    section_name: "bottom-tradition-section",
                    section_title: "Bottom Tradition Section",
                    section_split_start:
                        "<!-------------------------------------bottom-tradition-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /bottom-tradition-section------------------------------------->",
                    section_order: 11,
                },
                {
                    section_name: "menu-section",
                    section_title: "Menu Section",
                    section_split_start:
                        "<!-------------------------------------menu-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /menu-section------------------------------------->",
                    section_order: 12,
                },
                {
                    section_name: "available-section",
                    section_title: "Available Section",
                    section_split_start:
                        "<!-------------------------------------available-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /available-section------------------------------------->",
                    section_order: 13,
                },
                {
                    section_name: "book-now-section",
                    section_title: "Book Now Section",
                    section_split_start:
                        "<!-------------------------------------book-now-section------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /book-now-section------------------------------------->",
                    section_order: 14,
                },
            ]
            cssJSON = {
                "font-color": "#808080",
                "button-text-color": "#212529",
                "button-background-color": "transparent",
                "button-text-color-hover": "#ffffff",
                "button-background-color-hover": "#333333",
                "font-family-header": `'roslindale_testingtextSBd'`,
                "font-family-body": `'Source Sans Pro', sans-serif`
            }
            break;
        case "Carpentry":
        case "carpentry":
            templateName = 'Carpentry'
            thumbnail = `${assetsUrl}/templates/carpentry/wpScreenshot.png`
            sectionJSON = [
                {
                    section_name: "Section-2",
                    section_title: "Section 2",
                    section_split_start: "<!-------------------------------------Section-2------------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-2----------------------------------->",
                    section_order: 1,
                },
                {
                    section_name: "Section-3",
                    section_title: "Section 3",
                    section_split_start: "<!------------------------------------- Section-3----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-3----------------------------------->",
                    section_order: 2,
                },
                {
                    section_name: "Section-4",
                    section_title: "Section 4",
                    section_split_start: "<!------------------------------------- Section-4----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-4----------------------------------->",
                    section_order: 3,
                },
                {
                    section_name: "Section-5",
                    section_title: "Section 5",
                    section_split_start: "<!------------------------------------- Section-5----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-5----------------------------------->",
                    section_order: 4,
                },
                {
                    section_name: "Section-6",
                    section_title: "Section 6",
                    section_split_start: "<!------------------------------------- Section-6----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-6----------------------------------->",
                    section_order: 5,
                },
                {
                    section_name: "Section-7",
                    section_title: "Section 7",
                    section_split_start: "<!------------------------------------- Section-7----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-7----------------------------------->",
                    section_order: 6,
                },
                {
                    section_name: "Section-8",
                    section_title: "Section 8",
                    section_split_start: "<!------------------------------------- Section-8----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-8----------------------------------->",
                    section_order: 7,
                },
                {
                    section_name: "Section-9",
                    section_title: "Section 9",
                    section_split_start: "<!------------------------------------- Section-9----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-9----------------------------------->",
                    section_order: 8,
                },
                {
                    section_name: "Footer section",
                    section_title: "Footer section",
                    section_split_start: "<!--Footer Section-->",
                    section_split_end: "<!--End Footer section-->",
                    section_order: 9,
                },
            ]
            cssJSON = {
                "font-color": "#3C3C3C",
                "button-text-color": "#ffffff",
                "button-background-color": "#3C3C3C",
                "button-text-color-hover": "#ffffff",
                "button-background-color-hover": "#3C3C3C",
                "font-family-header": `'Be Vietnam', sans-serif`,
                "font-family-body": `'Be Vietnam', sans-serif`,
            }
            break;
        case "Therapists":
        case "therapists":
            templateName = 'Therapists'
            thumbnail = `${assetsUrl}/templates/therapists/wpScreenshot.png`
            sectionJSON = [
                {
                    section_name: "Section-1",
                    section_title: "Section 1",
                    section_split_start: "<!-------------------------------------cs-sec1------------------------------------->",
                    section_split_end: "<!------------------------------------- /cs-sec1------------------------------------->",
                    section_order: 1,
                },
                {
                    section_name: "Section-2",
                    section_title: "Section 2",
                    section_split_start: "<!------------------------------------- cs-sec2------------------------------------->",
                    section_split_end: "<!------------------------------------- /cs-sec2------------------------------------->",
                    section_order: 2,
                },
                {
                    section_name: "Section-3",
                    section_title: "Section 3",
                    section_split_start: "<!--Molly Nix-->",
                    section_split_end: "<!-- /Molly Nix-->",
                    section_order: 3,
                },
                {
                    section_name: "Section-4",
                    section_title: "Section 4",
                    section_split_start: "<!--What Service Provide-->",
                    section_split_end: "<!-- /What Service Provide-->",
                    section_order: 4,
                },
                {
                    section_name: "Section-5",
                    section_title: "Section 5",
                    section_split_start: "<!--Chiropractic Care Help You?-->",
                    section_split_end: "<!-- /Chiropractic Care Help You?-->",
                    section_order: 5,
                },
                {
                    section_name: "Section-6",
                    section_title: "Section 6",
                    section_split_start: "<!--team of professionals-->",
                    section_split_end: "<!-- /team of professionals-->",
                    section_order: 6,
                },
                {
                    section_name: "Section-7",
                    section_title: "Section 7",
                    section_split_start: "<!--Life Style Back-->",
                    section_split_end: "<!-- /Life Style Back-->",
                    section_order: 7,
                },
                {
                    section_name: "Section-8",
                    section_title: "Section 8",
                    section_split_start: "<!--Testimonial section-->",
                    section_split_end: "<!-- /Testimonial section-->",
                    section_order: 8,
                },
                {
                    section_name: "Footer section",
                    section_title: "Footer section",
                    section_split_start: "<!--Footer Section-->",
                    section_split_end: "<!--End Footer section-->",
                    section_order: 9,
                },
            ]
            cssJSON = {
                "font-color": "#200960",
                "button-text-color": "#200960",
                "button-background-color": "transparent",
                "button-text-color-hover": "#ffffff",
                "button-background-color-hover": "#200960",
                "font-family-header": `'Barlow', sans-serif`,
                "font-family-body": `'Barlow', sans-serif`,
            }
            break;
        case "Event":
        case "event":
            templateName = 'Event'
            thumbnail = `${assetsUrl}/templates/event/wpScreenshot.png`
            sectionJSON = [
                {
                    section_name: "Home",
                    section_title: "Home",
                    section_split_start: "<!-------------------------------------Section-2------------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-2----------------------------------->",
                    section_order: 1,
                },
                {
                    section_name: "Inovation",
                    section_title: "Inovation",
                    section_split_start: "<!------------------------------------- Section-3----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-3----------------------------------->",
                    section_order: 2,
                },
                {
                    section_name: "vedio",
                    section_title: "vedio",
                    section_split_start: "<!------------------------------------- Section-4----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-4----------------------------------->",
                    section_order: 3,
                },
                {
                    section_name: "speaker",
                    section_title: "speaker",
                    section_split_start: "<!------------------------------------- Section-5----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-5----------------------------------->",
                    section_order: 4,
                },
                {
                    section_name: "custom-sec6",
                    section_title: "custom-sec6",
                    section_split_start: "<!------------------------------------- Section-6----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-6----------------------------------->",
                    section_order: 5,
                },
                {
                    section_name: "Conference",
                    section_title: "Conference",
                    section_split_start: "<!------------------------------------- Section-7----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-7----------------------------------->",
                    section_order: 6,
                },
                {
                    section_name: "custom-sec9",
                    section_title: "custom-sec9",
                    section_split_start: "<!------------------------------------- Section-8----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-8----------------------------------->",
                    section_order: 7,
                },
                {
                    section_name: "tech-companies",
                    section_title: "tech-companies",
                    section_split_start: "<!------------------------------------- Section-9----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-9----------------------------------->",
                    section_order: 8,
                },
                {
                    section_name: "testimonial",
                    section_title: "testimonial",
                    section_split_start: "<!------------------------------------- Section-10----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-10----------------------------------->",
                    section_order: 9,
                },
            ]
            cssJSON = {
                "font-color": "#869AB8",
                "button-text-color": "#ffffff",
                "button-background-color": "#0B32FF",
                "button-text-color-hover": "#ffffff",
                "button-background-color-hover": "#161c2d",
                "font-family-header": `'Barlow', sans-serif`,
                "font-family-body": `'Barlow', sans-serif`,
            }
            break;
        case "Musician":
        case "musician":
            templateName = 'Musician'
            thumbnail = `${assetsUrl}/templates/musician/wpScreenshot.png`
            sectionJSON = [
                {
                    section_name: "home",
                    section_title: "Home",
                    section_split_start: "<!-------------------------------------Section-2------------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-2----------------------------------->",
                    section_order: 1,
                },
                {
                    section_name: "aboutus",
                    section_title: "About Us",
                    section_split_start: "<!------------------------------------- Section-3----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-3----------------------------------->",
                    section_order: 2,
                },
                {
                    section_name: "Albumb",
                    section_title: "Albumb",
                    section_split_start: "<!------------------------------------- Section-4----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-4----------------------------------->",
                    section_order: 3,
                },
                {
                    section_name: "Testimonail",
                    section_title: "Testimonail",
                    section_split_start: "<!------------------------------------- Section-5----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-5----------------------------------->",
                    section_order: 4,
                },
                {
                    section_name: "tour",
                    section_title: "Tour",
                    section_split_start: "<!------------------------------------- Section-6----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-6----------------------------------->",
                    section_order: 5,
                },
                {
                    section_name: "vedio-section",
                    section_title: "Vedio Section",
                    section_split_start: "<!------------------------------------- Section-7----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-7----------------------------------->",
                    section_order: 6,
                },
                {
                    section_name: "news",
                    section_title: "News",
                    section_split_start: "<!------------------------------------- Section-8----------------------------------->",
                    section_split_end: "<!------------------------------------- /Section-8----------------------------------->",
                    section_order: 7,
                }
            ]
            cssJSON = {
                "font-color": "#1A1A1A",
                "button-text-color": "#1A1A1A",
                "button-background-color": "transparent",
                "button-text-color-hover": "#ffffff",
                "button-background-color-hover": "#1A1A1A",
                "font-family-header": `'synebold'`,
                "font-family-body": `'synebold'`,
            }
            break;
        case "Blog":
            break;
        case "Wedding":
            break;
        case "Gym":
        case "gym":
            templateName = 'Gym'
            thumbnail = `${assetsUrl}/templates/gym/wpScreenshot.png`
            sectionJSON = [
                {
                    section_name: "section-1",
                    section_title: "Section 1",
                    section_split_start:
                        "<!-------------------------------------Section-1------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-1----------------------------------->",
                    section_order: 1,
                },
                {
                    section_name: "section-2",
                    section_title: "Section 2",
                    section_split_start:
                        "<!-------------------------------------Section-2------------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-2----------------------------------->",
                    section_order: 2,
                },
                {
                    section_name: "section-3",
                    section_title: "Section 3",
                    section_split_start:
                        "<!------------------------------------- Section-3----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-3----------------------------------->",
                    section_order: 3,
                },
                {
                    section_name: "section-4",
                    section_title: "Section 4",
                    section_split_start:
                        "<!------------------------------------- Section-4----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-4----------------------------------->",
                    section_order: 4,
                },
                {
                    section_name: "section-5",
                    section_title: "Section 5",
                    section_split_start:
                        "<!------------------------------------- Section-5----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-5----------------------------------->",
                    section_order: 5,
                },
                {
                    section_name: "section-6",
                    section_title: "Section 6",
                    section_split_start:
                        "<!------------------------------------- Section-6----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-6----------------------------------->",
                    section_order: 6,
                },
                {
                    section_name: "section-7",
                    section_title: "Section 7",
                    section_split_start:
                        "<!------------------------------------- Section-7----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-7----------------------------------->",
                    section_order: 7,
                },
                {
                    section_name: "section-8",
                    section_title: "Section 8",
                    section_split_start:
                        "<!------------------------------------- Section-8----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-8----------------------------------->",
                    section_order: 8,
                },
                {
                    section_name: "section-9",
                    section_title: "Section 9",
                    section_split_start:
                        "<!------------------------------------- Section-9----------------------------------->",
                    section_split_end:
                        "<!------------------------------------- /Section-9----------------------------------->",
                    section_order: 9,
                },
            ]
            cssJSON = {
                "font-color": "#232323",
                "button-text-color": "#232323",
                "button-background-color": "transparent",
                "button-text-color-hover": "#ffffff",
                "button-background-color-hover": "#232323",
                "font-family-header": `'Source Sans Pro', sans-serif`,
                "font-family-body": `'Source Sans Pro', sans-serif`,
            }
            break;
        case "Yoga":
            break;
        default:
            break;
    }
    return {
        sectionJSON,
        cssJSON,
        thumbnail,
        template_name: templateName
    }
}

export const uploadSiteJSONObj = (uploadObj, site_id = 1) => {
    return new Promise(resolve => {
        if (!site_id) {
            showToast({ type: 'error', message: 'No Site Selected' })
            return resolve({ error: true })
        }
        const storeState = store.getState()
        const userS3Dir = storeState.global.userS3Dir

        let s3Dir = userS3Dir

        var json = JSON.stringify(uploadObj),
            blob = new Blob([json], { type: "octet/stream" }),
            file = new File([blob], "content.json");

        _s3.uploadFile(file, s3Dir + `/sites/${site_id}`, (resp) => {
            if (resp.error) {
                if (resp.message) {
                    console.error(resp.message, 'sss.p')
                    showToast({ type: 'error', message: resp.message })
                }
                return resolve({ error: true })
            }
            !(uploadObj.pageManager && uploadObj.pageManager.length == 0) && showToast({ type: 'success', message: 'Content Saved' })
            // resp.data.location

            let data = { site_id: site_id, path: resp.data.location }
            let formData = new FormData()
            _.each(data, (val, key) => {
                formData.append(key, val)
            })
            Request.setSiteContentFilePath(formData).then(apiRequest => {
                if (apiRequest.messageType == 'error') {
                    console.error(apiRequest, 'sss.p')
                    showToast({ type: 'error', message: apiRequest.message })
                    return resolve({ error: true })
                }
                return resolve({ error: false, path: data.path })
            })
        })
    })
}