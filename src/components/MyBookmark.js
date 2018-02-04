import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FlatList, RefreshControl } from 'react-native'
import Article from './Article'
import Login from './Login'

export default class MyBookmark extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  componentDidMount () {
    if (this.props.login.isLogin) {
      this.props.getBookmarkArticlesFromApi(this.props.index, this.props.login.userData.displayName, this.props.data.offset)
    }
  }

  onRefreshHandler () {
    this.setState({refreshing: true})
    this.props.clearArticles(this.props.index).then(() => {
      setTimeout(() => {
        this.props.getBookmarkArticlesFromApi(this.props.index, this.props.login.userData.displayName, 0).then(() => {
          this.setState({refreshing: false})
        })
      }, 2000)
    })
  }

  render () {
    if (this.props.login.isLogin) {
      return (
        <FlatList
          data={this.props.data.items}
          renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
          keyExtractor={(item, index) => ('bookmarkArticle' + index)}
          onEndReached={() => {
            this.props.getBookmarkArticlesFromApi(this.props.index, this.props.login.userData.displayName, this.props.data.offset)
          }}
          onEndReachedThreshold={0}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefreshHandler.bind(this)}
            />
          }
        />
      )
    } else {
      return <Login />
    }
  }
}

MyBookmark.propTypes = {
  login: PropTypes.object.isRequired,
  getBookmarkArticlesFromApi: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
  clearArticles: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  showPage: PropTypes.func.isRequired,
}
