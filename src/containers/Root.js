import React from 'react'
import { connect } from 'react-redux'
import Root from '../components/Root'

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Root)
