import React from 'react'
import { connect } from 'react-redux'
import ArticleDetail from '../components/ArticleDetail'
import { getCommentsFromApi } from '../actions/commentList'
import { addBookmark } from '../actions/bookmarkForm'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: () => { dispatch(addBookmark()) },
    getCommentsFromApi: (url) => { dispatch(getCommentsFromApi(url)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
