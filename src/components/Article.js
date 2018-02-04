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
        <Body>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text note>{this.props.bookmarkcount} users</Text>
        </Body>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'transparent'
  },
  title: {
    marginBottom: 8,
    lineHeight: 22
  }
})

Article.propTypes = {
  showPage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bookmarkcount: PropTypes.string.isRequired
}
