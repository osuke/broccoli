import React from 'react'
import { connect } from 'react-redux'
import  AppBrowser from '../components/AppBrowser/AppBrowser'

const mapStateToProps = (state) => {
  const tmp = state.screen
  return { ...tmp }
}

export default connect(mapStateToProps)(AppBrowser)
