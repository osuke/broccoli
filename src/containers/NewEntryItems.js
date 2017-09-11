import React from 'react'
import { connect } from 'react-redux'
import NewEntryItems from '../components/NewEntryItems'
import { getArticlesFromApi } from '../actions/fetchArticles'
import { showPage, hidePage } from '../actions/webview'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticlesFromApi: (url, index) => { dispatch(getArticlesFromApi(url, index)) },
    showPage: (url) => { dispatch(showPage(url)) },
    hidePage: () => { dispatch(hidePage()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryItems)