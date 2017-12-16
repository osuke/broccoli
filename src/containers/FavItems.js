import React from 'react'
import { connect } from 'react-redux'
import FavItems from '../components/FavItems'
import { getArticlesFromApi, getFavArticlesFromApi } from '../actions/fetchArticles'
import { showPage, hidePage } from '../actions/webview'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticlesFromApi: (url, index) => { dispatch(getArticlesFromApi(url, index)) },
    getFavArticlesFromApi: (url, index, userName, offset) => { dispatch(getFavArticlesFromApi(url, index, userName, offset)) },
    showPage: (url) => { dispatch(showPage(url)) },
    hidePage: () => { dispatch(hidePage()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavItems)
