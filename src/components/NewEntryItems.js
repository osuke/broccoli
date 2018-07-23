import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList, RefreshControl, StyleSheet } from 'react-native'
import Article from './Article'
import { Spinner } from 'native-base'

export default class NewEntryItems extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false,
      isLoading: true
    }
  }

  componentDidMount () {
    this.props.getArticlesFromApi(this.props.data.url, this.props.index).then(() => {
      setTimeout(() => {
        this.setState({isLoading: false})
      }, 1000)
    })
  }

  onRefreshHandler () {
    this.setState({refreshing: true})
    this.props.clearArticles(this.props.index).then(() => {
      setTimeout(() => {
        this.props.getArticlesFromApi(this.props.data.url, this.props.index).then(() => {
          this.setState({refreshing: false})
        })
      }, 2000)
    })
  }

  render () {
    return (
      <View style={styles.wrap}>
        <FlatList
          data={this.props.data.items}
          renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
          keyExtractor={(item, index) => ('article' + index)}
          style={styles.list}
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
  list: {
    paddingTop: 8,
    backgroundColor: '#f2f2f2',
  },
})

NewEntryItems.propTypes = {
  getArticlesFromApi: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  clearArticles: PropTypes.func.isRequired,
  showPage: PropTypes.func.isRequired
}
