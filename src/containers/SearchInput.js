import React from 'react'
import { connect } from 'react-redux'
import SearchInput from '../components/SearchInput'
import {
  getBookmarkArticlesFromApi,
  fetchBookmarkCache,
  getSearchResultFromApi,
} from '../actions/fetchArticles'

const mapStateToProps = state => {
  return { userData: state.login.userData }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearchResultFromApi: (keyword, userData, offset) => {
      dispatch(getSearchResultFromApi(keyword, userData, offset))
    },
    getBookmarkArticlesFromApi: displayName => {
      dispatch(getBookmarkArticlesFromApi(displayName))
    },
    fetchBookmarkCache: () => {
      dispatch(fetchBookmarkCache())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)