import React from 'react'
import { connect } from 'react-redux'
import Tabs from '../components/Tabs/Tabs'
import { switchTabs } from '../actions/tabs'

const mapStateToProps = (state) => {
  const tmp = state.tabs
  return { ...tmp }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchTabs: (props) => { dispatch(switchTabs(props)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs)
