import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
} from 'react-native'
import { Spinner } from 'native-base'
import Article from './Article'
import Login from './Login'

export default class MyBookmark extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      isLoading: false,
    }
  }

  componentDidMount () {
    if (this.props.login.isLogin) {
      this.props.getBookmarkArticlesFromApi(this.props.index, this.props.login.userData.displayName, this.props.data.offset)
    }
  }

  onRefreshHandler () {
    this.setState({ refreshing: true, })
    setTimeout(() => {
      this.props.getBookmarkArticlesFromApi(this.props.index, this.props.login.userData.displayName, 0).then(() => {
        this.setState({ refreshing: false, })
      })
    }, 2000)
  }

  onEndReachedHandler () {
    this.setState({
      isLoading: true,
    })

    this.props.getBookmarkArticlesFromApi(this.props.index, this.props.login.userData.displayName, this.props.data.offset).then(() => {
      setTimeout(() => {
        this.setState({
          isLoading: false,
        })
      }, 1000)
    })
  }

  showSpinner () {
    if (this.state.isLoading) {
      return (
        <Spinner
          color="#000"
          size="small"
        />
      )
    } else {
      return null
    }
  }

  render () {
    if (this.props.login.isLogin) {
      return (
        <View style={styles.wrap}>
          <FlatList
            style={styles.flatList}
            ref="flatlist"
            data={this.props.data.items}
            renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)
            }
            keyExtractor={(item, index) => ('bookmarkArticle' + index)}
            onEndReached={this.onEndReachedHandler.bind(this)}
            onEndReachedThreshold={0}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefreshHandler.bind(this)}
              />
            }
            ListFooterComponent={this.showSpinner.bind(this)}
          />
        </View>
      )
    } else {
      return <Login />
    }
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  flatList: {
    paddingTop: 8,
  },
})

MyBookmark.propTypes = {
  login: PropTypes.object.isRequired,
  getBookmarkArticlesFromApi: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
  clearArticles: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  showPage: PropTypes.func.isRequired,
}