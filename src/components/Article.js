import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { Text, ListItem, Body, Right } from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_PRIMARY,
} from '../constants/styles.js'

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
    borderBottomWidth: BORDER_WIDTH_PRIMARY,
    borderBottomColor: BORDER_COLOR_PRIMARY,
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
