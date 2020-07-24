import _ from 'lodash'
import { setEditorStyleData } from '../../../reducers/actions/editorHistoryActions'

const styleManager = {
  defaultConfig: {},
  addEvents: (meta, options) => { //options = { pseudoClass: 'hover' }
    customEvents.saveStyleInfo(meta, options)
  },
  init: (styleStr, dispatch) => {
    //create object
    const styleObj = styleManager.strToObj(styleStr)
    if (styleObj.error) {
      return styleObj
    }
    //save in redux=====================================================================
    dispatch(setEditorStyleData(styleObj.data.stylesObj))
    //==================================================================================

    let frame = document.getElementsByClassName("gjs-frame")
    const body = frame[0].contentWindow.document.getElementsByTagName('body')[0]
    //add the style tag in dom
    let styleId = 'ss-style'
    let style = document.createElement("style")
    style.id = styleId
    style.innerHTML = styleObj.data.filteredStr
    body.insertBefore(style, body.firstChild)
    if (styleObj.data && styleObj.data.stylesObj[0] && styleObj.data.stylesObj[0].custom) {
      let style = document.createElement("style")
      style.id = 'ss-customStyles'
      style.innerHTML = styleObj.data.stylesObj[0].styles
      body.insertBefore(style, body.firstChild)
    }
  },
  strToObj: (str) => {    //does not support media queries
    str = str.toLowerCase()
    let response = []
    let start = str.search('<style>')
    let end = str.search('</style>')
    if (start == -1) {
      return { error: true, message: 'Invalid String, cannot find <style> tag' }
    }
    if (end == -1) str = str.substring(start + 7, str.length - 1)
    else str = str.substring(start + 7, end - 1)
    str = str.trim()
    //extract custom styles now 
    const data = styleManager.extractBlock('@media', str)
    if (data.customCode != '') {
      response.push({
        custom: true,
        styles: data.customCode
      })
    }
    str = data.str
    // continue with flow
    let ruleSets = str.split('}')
    if (ruleSets.length <= 1) return { error: false, message: 'Converted successfully', data: { filteredStr: str, stylesObj: response } }
    _.each(ruleSets, (item) => {
      if (item == '') return
      let ruleSet = item.split('{')
      let selector = ruleSet[0].trim()
      let styles = {}
      let declarationBlock = ruleSet[1]
      if (!declarationBlock) return
      let declarations = declarationBlock.split(';')
      _.each(declarations, (item) => {
        let declaration = item.split(':')
        if (item == '') return
        if (declaration[0].trim() == '') return
        styles[declaration[0].trim()] = declaration[1]
      })
      response.push({ selector, styles })
    })
    return { error: false, message: 'converted successfully', data: { filteredStr: str, stylesObj: response } }
  },
  extractBlock: (phrase = '@media', str) => {
    let response = {
      str: str,
      customCode: ''
    }
    // find phrase index
    let indices = styleManager.getIndicesOf(phrase, str);
    if (indices.length == 0) {
      return response
    }
    let customStyleIndices = [] //{ start: '', end: '' }
    _.each(indices, (startIndex, key) => {
      // loop string from index
      customStyleIndices[key] = { start: startIndex }
      let exitBraceCount = 0, startBraceFound = false

      for (let i = startIndex; i < str.length; i++) {
        if (str[i] == '{') {
          exitBraceCount++
          startBraceFound = true
        } else if (str[i] == '}') {
          exitBraceCount--
        }
        if (exitBraceCount == 0 && startBraceFound) {
          customStyleIndices[key].end = i
          break;
        }
      }
    })
    customStyleIndices.forEach((item, key) => {
      let subStr = str.substring(item.start, item.end)
      response.customCode += '\n' + subStr
      str = str.replace(subStr, "");
      if (customStyleIndices[key + 1]) {
        customStyleIndices[key + 1].start -= subStr.length
        customStyleIndices[key + 1].end -= subStr.length
      }
    })
    response.str = str
    return response
  },
  getIndicesOf: (searchStr, str, caseSensitive) => {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
      return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
      str = str.toLowerCase();
      searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
      indices.push(index);
      startIndex = index + searchStrLen;
    }
    return indices;
  },
  getSelectorStyles: (selector, styleObj) => {
    let obj = selector.map((val) => {
      return _.find(styleObj, (item) => {
        if (item.selector) {
          return item.selector.includes(val.trim())
        }
      })
    })
    return obj.filter(x => x !== undefined);
  },
  getSelectorStyleInfo: (selector, styleObj, options = {}) => {
    const { pseudoClass } = options
    let response = {
      index: [],
      styles: {}
    }
    response.index = selector.map((val) => {
      return _.findIndex(styleObj, (item) => {
        if (item.selector) {
          return item.selector.includes(`${pseudoClass ? val + ':' + pseudoClass : val}`.trim())
        }
      })
    })
    response.index = response.index.filter(x => x !== -1);
    response.index.forEach(val => {
      response.styles = { ...response.styles, ...styleObj[val].styles }
    })
    return response
  }
}

export const customEvents = {
  saveStyleInfo: (meta, options) => {
    const { elem, node } = meta
    let className = elem.className.split(' ')
    const styleInfo = styleManager.getSelectorStyleInfo(className, node.props.styleObj, options)
    node.setState({ selected: { node: elem, styleInfo } })
  },
}

export default styleManager