import _ from 'lodash'
import { layerTitleIcons } from '../../../assets/Icons'

const layerIconMap = [
    {
        type: 'text',
        icon: `${layerTitleIcons.Text}`
    },
    {
        type: 'label',
        icon: `${layerTitleIcons.Text}`
    },
    {
        type: 'box',
        icon: `${layerTitleIcons.Container}`
    },
    {
        tagName: 'section',
        icon: `${layerTitleIcons.Section}`
    },
    {
        tagName: 'div',
        icon: `${layerTitleIcons.Container}`
    },
    {
        tagName: 'h1',
        icon: `${layerTitleIcons.H1}`
    },
    {
        tagName: 'h2',
        icon: `${layerTitleIcons.H2}`
    },
    {
        tagName: 'h3',
        icon: `${layerTitleIcons.H3}`
    },
    {
        tagName: 'h4',
        icon: `${layerTitleIcons.H4}`
    },
    {
        tagName: 'h5',
        icon: `${layerTitleIcons.H5}`
    },
    {
        tagName: 'h6',
        icon: `${layerTitleIcons.H6}`
    },
    {
        type: 'img',
        icon: `${layerTitleIcons.Image}`
    },
    {
        type: 'video',
        icon: `${layerTitleIcons.Video}`
    },
    {
        tagName: 'form',
        icon: `${layerTitleIcons.Form}`
    },
    {
        type: 'button',
        icon: `${layerTitleIcons.Button}`
    },
    {
        tagName: 'a',
        icon: `${layerTitleIcons.Link}`
    },
    {
        name: 'Row',
        icon: `${layerTitleIcons.Column}`
    },
    {
        name: 'Cell',
        icon: `${layerTitleIcons.Cell}`
    },
    {
        type: 'input',
        icon: `${layerTitleIcons.Input}`
    },
    {
        type: 'map',
        icon: `${layerTitleIcons.Map}`
    },
    {
        id: 'ss-upload-container',
        icon: `${layerTitleIcons.Column}`
    }
]

const findByMap = (searchKey, value) => {
    return _.find(layerIconMap, (obj) => obj[searchKey] == value)
}

// priority to Id then TagName
export default (components) => {
    _.each(components, (comp, index) => {
        const { tagName, type, name, attributes } = comp.attributes
        let found;
        // if id then find corresponsing id 
        if (attributes && attributes.id && attributes.id.trim() != '') {
            found = findByMap('id', attributes.id)
        }
        if (!found && name && name.trim('') != '') {
            // found = findByType(type)
            found = findByMap('name', name)
        }
        // if corres id not there then find corres tagName
        if (!found && tagName && tagName.trim() != '') {
            found = findByMap('tagName', tagName)
        }
        if (!found && type && type.trim('') != '') {
            // found = findByType(type)
            found = findByMap('type', type)
        }
        // if corres tagName not there then return false
        if (!found) {
            return
        }
        // Set Icon for corresponding component
        comp.set({ icon: found.icon })
    })
}