import React, { Component } from 'react'
import { FlatList, RefreshControl } from 'react-native'
import FavArticle from './FavArticle'
import Login from './Login'

export default class FavItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  componentDidMount () {
    if (this.props.login.isLogin) {
      this.props.getFavArticlesFromApi(this.props.index, this.props.login.userData.urlName, this.props.data.offset)
    }
  }

  onRefreshHandler () {
    this.setState({refreshing: true})
    this.props.clearArticles(this.props.index).then(() => {
      setTimeout(() => {
        this.props.getFavArticlesFromApi(this.props.index, this.props.login.userData.urlName, this.props.data.offset).then(() => {
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
          renderItem={({item}) => (<FavArticle {...item} showPage={this.props.showPage} />)}
          keyExtractor={(item, index) => ('article' + index)}
          onEndReached={() => {
            this.props.getFavArticlesFromApi(this.props.index, this.props.login.userData.urlName, this.props.data.offset)
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
