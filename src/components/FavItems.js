import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
} from 'react-native'
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
    setTimeout(() => {
      this.props.getFavArticlesFromApi(this.props.index, this.props.login.userData.urlName, this.props.data.offset).then(() => {
        this.setState({refreshing: false})
      })
    }, 2000)
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

FavItems.propTypes = {
  login: PropTypes.object.isRequired,
  getFavArticlesFromApi: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  showPage: PropTypes.func.isRequired,
}
