import React from 'react'
import { connect } from 'react-redux'
import BookmarkForm from '../components/BookmarkForm'
import { addBookmark, closeBookmark, saveBookmark, fetchBookmarkData } from '../actions/bookmarkForm'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: () => { dispatch(addBookmark()) },
    closeBookmark: () => { dispatch(closeBookmark()) },
    saveBookmark: (userData, url, comment) => { dispatch(saveBookmark(userData, url, comment)) },
    fetchBookmarkData: (userData, url) => { dispatch(fetchBookmarkData(userData, url)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkForm)
