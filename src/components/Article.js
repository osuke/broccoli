import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Article extends React.Component {
  render () {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.showPage(this.props.link)
          Actions.externalPage()
        }}
      >
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.count}>{this.props.bookmarkcount} users</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    padding: 16,
  },
  title: {
    fontSize: 16,
    color: '#14171a',
    marginBottom: 2,
    lineHeight: 20
  },
  count: {
    fontSize: 14,
    color: '#999'
  }
})
