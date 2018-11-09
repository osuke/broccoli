import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, FlatList, RefreshControl, StyleSheet } from 'react-native'
import Article from './Article'
import { Spinner } from 'native-base'

export default class NewEntryItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      isLoading: true,
      isSuccess: true,
    }
  }

  componentDidMount () {
    this.props.getArticlesFromApi(this.props.data.url, this.props.index)
      .then(val => {
        this.setState({isSuccess: true})
        this.setState({isLoading: false})
      })
      .catch(err => {
        this.setState({isSuccess: false})
        this.setState({isLoading: false})
      })

  }

  onRefreshHandler () {
    this.setState({refreshing: true})
    this.props.getArticlesFromApi(this.props.data.url, this.props.index)
      .then(val => {
        this.setState({isSuccess: true})
        this.setState({refreshing: false})
      })
      .catch(err => {
        this.setState({isSuccess: false})
        this.setState({refreshing: false})
      })
  }

  render () {
    return (
      <View style={styles.wrap}>
        {!this.state.refreshing && !this.state.isSuccess &&
          <View style={styles.error}>
            <Text style={styles.errorText}>しばらく時間を空けてから、もう一度お試しください</Text>
          </View>
        }
        <FlatList
          style={styles.flatList}
          data={this.props.data.items}
          renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
          keyExtractor={(item, index) => ('article' + index)}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefreshHandler.bind(this)}
            />
          }
          ListEmptyComponent={() => {
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
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  flatList: {
    paddingTop: 8,
  },
  error: {
    paddingTop: 24,
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center',
  },
})

NewEntryItems.propTypes = {
  getArticlesFromApi: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  showPage: PropTypes.func.isRequired
}
