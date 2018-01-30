import React from 'react'
import { connect } from 'react-redux'
import ArticleDetail from '../components/ArticleDetail'
import { getCommentsFromApi } from '../actions/commentList'
import { fetchBookmarkData } from '../actions/bookmarkForm'


const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookmarkData: (userData, url) => { dispatch(fetchBookmarkData(userData, url)) },
    getCommentsFromApi: (url) => { dispatch(getCommentsFromApi(url)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
