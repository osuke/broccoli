import React from 'react'
import { connect } from 'react-redux'
import BookmarkForm from '../components/BookmarkForm'
import {
  addBookmark,
  closeBookmark,
  saveBookmark,
  deleteBookmark,
  fetchBookmarkData
} from '../actions/bookmarkForm'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBookmark: () => { dispatch(addBookmark()) },
    closeBookmark: () => { dispatch(closeBookmark()) },
    saveBookmark: (userData, url, comment) => { dispatch(saveBookmark(userData, url, comment)) },
    deleteBookmark: (userData, url) => { dispatch(deleteBookmark(userData, url)) },
    fetchBookmarkData: (userData, url) => { dispatch(fetchBookmarkData(userData, url)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkForm)
