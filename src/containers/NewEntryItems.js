import React from 'react'
import { connect } from 'react-redux'
import NewEntryItems from '../components/NewEntryItems'
import { getArticlesFromApi, clearArticles } from '../actions/fetchArticles'
import { showPage, hidePage } from '../actions/webview'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getArticlesFromApi: (url, index) => (
      new Promise(resolve => {
        dispatch(getArticlesFromApi(url, index))
        resolve()
      })
    ),
    clearArticles: index => (
      new Promise(resolve => {
        dispatch(clearArticles(index))
        resolve()
      })
    ),
    showPage: url => { dispatch(showPage(url)) },
    hidePage: () => { dispatch(hidePage()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryItems)