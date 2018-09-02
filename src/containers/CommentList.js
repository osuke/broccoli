import React from 'react'
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { closeComments } from '../actions/commentList'

const mapStateToProps = state => {
  return state.commentList
}

const mapDispatchToProps = dispatch => {
  return {
    closeComments: () => { dispatch(closeComments()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)