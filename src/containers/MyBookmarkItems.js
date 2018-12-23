import React from 'react'
import { connect } from 'react-redux'
import MyBookmarkItems from '../components/MyBookmarkItems'
import {
  getBookmarkArticlesFromApi,
  getSearchResultFromApi,
  fetchBookmarkCache,
} from '../actions/fetchArticles'
import { showPage } from '../actions/webview'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getBookmarkArticlesFromApi: displayName => dispatch(getBookmarkArticlesFromApi(displayName)),
    getSearchResultFromApi: (keyword, userData, offset = 0) => dispatch(getSearchResultFromApi(keyword, userData, offset)),
    fetchBookmarkCache: () => {
      dispatch(fetchBookmarkCache())
    },
    showPage: url => { dispatch(showPage(url)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBookmarkItems)
