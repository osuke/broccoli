import React from 'react'
import { connect } from 'react-redux'
import Article from '../components/Article'
import { showPage } from '../actions/webview'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    showPage: obj => { dispatch(showPage(obj)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)
