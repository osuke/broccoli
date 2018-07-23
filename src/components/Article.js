import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Text, ListItem, Body, Right } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class Article extends Component {
  render () {
    return (
      <ListItem
        onPress={() => {
          this.props.showPage(this.props)
          Actions.externalPage()
        }}
        style={styles.listItem}
      >
        <Body style={styles.body}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text note>{this.props.bookmarkcount} users</Text>
        </Body>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    marginLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    borderBottomWidth: 0,
  },
  title: {
    marginBottom: 8,
    lineHeight: 22
  },
  body: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingTop: 9,
    paddingRight: 12,
    paddingBottom: 12,
    marginLeft: 16,
  },
})

Article.propTypes = {
  showPage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bookmarkcount: PropTypes.string.isRequired
}
