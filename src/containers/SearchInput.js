import React from 'react'
import { connect } from 'react-redux'
import SearchInput from '../components/SearchInput'
import {
  getBookmarkArticlesFromApi,
  getSearchResultFromApi,
} from '../actions/fetchArticles'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getSearchResultFromApi: (keyword, userData) => {
      dispatch(getSearchResultFromApi(keyword, userData))
    },
    getBookmarkArticlesFromApi: displayName => {
      dispatch(getBookmarkArticlesFromApi(displayName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)