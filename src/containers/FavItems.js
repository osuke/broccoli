import React from 'react'
import { connect } from 'react-redux'
import FavItems from '../components/FavItems'
import { getFavArticlesFromApi, clearArticles } from '../actions/fetchArticles'
import { showPage, hidePage } from '../actions/webview'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getFavArticlesFromApi: (index, userName, offset) => (
      new Promise(resolve => {
        dispatch(getFavArticlesFromApi(index, userName, offset))
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

export default connect(mapStateToProps, mapDispatchToProps)(FavItems)
