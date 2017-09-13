import React from 'react'
import { View, ScrollView, FlatList, StyleSheet } from 'react-native'
import Article from './Article'

export default class NewEntryItems extends React.Component {
  componentDidMount () {
    this.props.getArticlesFromApi(this.props.data.url, this.props.index)
  }

  render () {
    return (
      <ScrollView style={styles.wrap}>
        <FlatList
          data={this.props.data.items}
          renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
          keyExtractor={(item, index) => ('article' + index)}
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff'
  },
})
