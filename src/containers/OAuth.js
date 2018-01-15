import React from 'react'
import { connect } from 'react-redux'
import OAuth from '../components/OAuth'
import { getRequestToken, getAccessToken } from '../actions/login'

const mapStateToProps = (state) => {
  return state.login
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRequestToken: () => { dispatch(getRequestToken()) },
    getAccessToken: (e) => { dispatch(getAccessToken(e)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OAuth)
