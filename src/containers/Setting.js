import React from 'react'
import { connect } from 'react-redux'
import Setting from '../components/Setting'
import { getRequestToken, getAccessToken } from '../actions/login'

const mapStateToProps = (state) => {
  return state.login
}

export default connect(mapStateToProps)(Setting)
