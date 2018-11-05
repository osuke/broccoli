import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Image,
} from 'react-native'
import {
  Text,
  ListItem,
  Body,
  Left,
  View,
} from 'native-base'
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
          <View>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.siteInfo}>
            <Text note>{this.props.domain}</Text>
          </View>
          <View>
            <Text note>{this.props.bookmarkcount} users</Text>
          </View>
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
    marginBottom: 6,
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
  siteInfo: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 5,
  },
  favicon: {
    width: 16,
    height: 16,
    marginTop: 1,
    marginRight: 6,
  },
})

Article.propTypes = {
  showPage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bookmarkcount: PropTypes.string.isRequired,
  favicon: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
}
