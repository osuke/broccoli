import React from 'react'
import { connect } from 'react-redux'
import ArticleDetail from '../components/ArticleDetail'
const mapStateToProps = (state) => {
  return state.webview
}

export default connect(mapStateToProps)(ArticleDetail)
