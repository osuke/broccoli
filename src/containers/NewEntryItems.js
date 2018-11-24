import React from 'react'
import { connect } from 'react-redux'
import NewEntryItems from '../components/NewEntryItems'
import { getArticlesFromApi } from '../actions/fetchArticles'

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    getArticlesFromApi: (url, index) => dispatch(getArticlesFromApi(url, index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryItems)