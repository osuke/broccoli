import React from 'react'
import { connect } from 'react-redux'
import Setting from '../components/Setting'
import { logout } from '../actions/login'

const mapStateToProps = state => {
  return state.login
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => { dispatch(logout()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting)
