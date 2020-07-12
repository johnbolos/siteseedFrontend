import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { push } from 'connected-react-router'

import { showLoader, hideLoader } from "../../reducers/actions"
import { selectTemplate } from "../../reducers/actions/templateActions"
import { getPushPathWrapper } from '../../routes'

function Home({ dispatch, loading, templates }) {
  return (
    <div>
      Hello Home!{`${loading}`}
      <button
        onClick={() => {
          console.log("buton pressed")
          dispatch(showLoader())
        }}
      >
        set Loading true{" "}
      </button>
      <button
        onClick={() => {
          console.log("buton pressed")
          dispatch(hideLoader())
        }}
      >
        Set loading false{" "}
      </button>
      <button
        onClick={() => {
          // getPushPathWrapper('designerStudio')
          dispatch(push("/designerStudio"))
        }}
      >
        Open studio
      </button>
      <br />
      <label>
        Pick a theme:
        <select onChange={e => dispatch(selectTemplate(e.target.value))} value={templates.templateName}>
          <option value="template1">Grapefruit</option>
          <option value="template2">Lime</option>
          <option value="template3">Coconut</option>
        </select>
      </label>
    </div>
  )
}

const mapStateToProps = ({ global, layout, templates }) => {
  return { loading: global.loading, templates }
}

const mapDispatchToProps = dispatch => {
  return { dispatch, selectTemplate: value => dispatch(selectTemplate(value)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
