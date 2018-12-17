import React from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'
import { showPage } from '../actions/webview'

const mapDispatchToProps = dispatch => {
  return {
    showPage: (url, title) => { dispatch(showPage(url, title)) },
  }
}

export default connect(null, mapDispatchToProps)(Article)
