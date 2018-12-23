import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyBookmarkItems from '../containers/MyBookmarkItems'
import Login from './Login'

export default class MyBookmark extends Component {
  render () {
    if (this.props.isLogin) {
      return <MyBookmarkItems />
    } else {
      return <Login />
    }
  }
}

MyBookmark.propTypes = {
  isLogin: PropTypes.object.isRequired,
}
