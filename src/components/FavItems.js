import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, RefreshControl } from 'react-native'
import { Spinner } from 'native-base'
import FavArticle from './FavArticle'
import Login from './Login'

export default class FavItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      isLoading: false
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

  onEndReachedHandler () {
    this.setState({
      isLoading: true
    })

    this.props.getFavArticlesFromApi(this.props.index, this.props.login.userData.urlName, this.props.data.offset).then(() => {
      setTimeout(() => {
        this.setState({
          isLoading: false
        })
      }, 1000)
    })
  }

  render () {
    if (this.props.login.isLogin) {
      return (
        <View>
          <FlatList
            data={this.props.data.items}
            renderItem={({item}) => (<FavArticle {...item} showPage={this.props.showPage} />)}
            keyExtractor={(item, index) => ('article' + index)}
            onEndReached={() => {
              this.props.getFavArticlesFromApi(this.props.index, this.props.login.userData.urlName, this.props.data.offset)
            }}
            onEndReached={this.onEndReachedHandler.bind(this)}
            onEndReachedThreshold={0}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefreshHandler.bind(this)}
              />
            }
          />
          {this.state.isLoading ? (
            <Spinner
              color="#000"
              style={{position: 'absolute', bottom: 10, left: 0, right: 0, zIndex: 100}}
            />
          ) : (
            null
          )}
        </View>
      )
    } else {
      return <Login />
    }
  }
}

FavItems.propTypes = {
  login: PropTypes.object.isRequired,
  getFavArticlesFromApi: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  showPage: PropTypes.func.isRequired,
}
