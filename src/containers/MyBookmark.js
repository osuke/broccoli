import React from 'react'
import { connect } from 'react-redux'
import MyBookmark from '../components/MyBookmark'

const mapStateToProps = state => {
  return {
    isLogin: state.login.isLogin
  }
}

export default connect(mapStateToProps, null)(MyBookmark)
