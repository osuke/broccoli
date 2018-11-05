import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Text,
  ListItem,
  Body,
  Right
} from 'native-base'
import { TITLE_COLOR_PRIMARY } from '../constants/styles'
import Icon from './Icon'

export default class OrderCategoryItem extends Component {
  render () {
    return (
      <ListItem
        style={styles.listItem}
        {...this.props.sortHandlers}>
        <Body>
          <Text style={styles.text}>{this.props.data.name}</Text>
        </Body>
        <Right>
          <Icon
            name="menu"
          />
        </Right>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    height: 52,
    backgroundColor: 'transparent',
  },
  text: {
    color: TITLE_COLOR_PRIMARY,
    fontWeight: 'bold',
  },
})

OrderCategoryItem.propTypes = {
  sortHandlers: PropTypes.object,
  data: PropTypes.object.isRequired
}
