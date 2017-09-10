import React from 'react'
import { connect } from 'react-redux'
import ModalWebview from '../components/ModalWebview'
const mapStateToProps = (state) => {
  return state.webview
}

export default connect(mapStateToProps)(ModalWebview)
