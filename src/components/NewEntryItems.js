import React from 'react'
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

  _onRefresh() {
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
      <ScrollView
        style={styles.wrap}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
        {this.props.data.items.length > 0 ? (
          <FlatList
            data={this.props.data.items}
            renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
            keyExtractor={(item, index) => ('article' + index)}
          />
        ) : (
          null
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff'
  },
})
