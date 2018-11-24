import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  FlatList,
  RefreshControl,
} from 'react-native'
import { 
  Spinner ,
} from 'native-base'
import SearchInput from '../containers/SearchInput'
import Article from './Article'
import Login from './Login'

export default class MyBookmark extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      isLoading: false,
      isSuccess: true,
    }
  }

  componentDidMount () {
    if (this.props.login.isLogin) {
      this.props.getBookmarkArticlesFromApi(this.props.login.userData)
    }
  }

  onRefreshHandler = () => {
    this.setState({refreshing: true})
    this.props.getBookmarkArticlesFromApi(this.props.login.userData)
      .then(val => {
        this.setState({isSuccess: true})
        this.setState({refreshing: false})
      })
      .catch(err => {
        this.setState({isSuccess: false})
        this.setState({refreshing: false})
      })
  }

  onEndReachedHandler = () => {
    this.setState({
      isLoading: true
    })
    this.props.getSearchResultFromApi(
      this.props.myBookmark.keyword,
      this.props.login.userData,
      this.props.myBookmark.offset + 20,
    ).then(val => {
      this.setState({isSuccess: true})
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
          <SearchInput />
          <View style={styles.wrap}>
            {this.props.myBookmark.type === 'LATEST' ? (
              <FlatList
                style={styles.flatList}
                ref="flatlist"
                data={this.props.myBookmark.items.latest}
                renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
                keyExtractor={(item, index) => ('bookmarkArticle' + index)}
                ListFooterComponent={this.showSpinner.bind(this)}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefreshHandler}
                  />
                }
              />
            ) : (
              <FlatList
                style={styles.flatList}
                ref="flatlist"
                data={this.props.myBookmark.items.searchResult}
                renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
                keyExtractor={(item, index) => ('bookmarkArticle' + index)}
                onEndReached={this.onEndReachedHandler}
                onEndReachedThreshold={0}
                ListFooterComponent={this.showSpinner.bind(this)}
              />
            )}
          </View>
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
  myBookmark: PropTypes.object.isRequired,
  getBookmarkArticlesFromApi: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  showPage: PropTypes.func.isRequired,
  getSearchResultFromApi: PropTypes.func.isRequired,
}
