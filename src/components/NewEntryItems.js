import React from 'react'
import PropTypes from 'prop-types'
import { View, ScrollView, FlatList, RefreshControl, StyleSheet, Text } from 'react-native'
import Article from './Article'

export default class NewEntryItems extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  componentDidMount () {
    this.props.getArticlesFromApi(this.props.data.url, this.props.index)
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
      <FlatList
        data={this.props.data.items}
        renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
        keyExtractor={(item, index) => ('article' + index)}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefreshHandler.bind(this)}
          />
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff'
  },
})

NewEntryItems.propTypes = {
  getArticlesFromApi: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
  clearArticles: PropTypes.func.isRequired,
  showPage: PropTypes.func.isRequired
}
