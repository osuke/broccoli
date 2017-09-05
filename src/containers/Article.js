import React from 'react'
import { connect } from 'react-redux'
import ModalWebview from '../components/Article'
import { showPage } from '../actions/webview'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    showPage: (url) => { dispatch(showPage(url)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
