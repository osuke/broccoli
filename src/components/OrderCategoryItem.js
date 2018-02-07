import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Text,
  ListItem,
  Body,
  Right
} from 'native-base'
import Icon from './Icon'

export default class OrderCategoryItem extends Component {
  render () {
    return (
      <ListItem
        style={styles.listItem}
        {...this.props.sortHandlers}>
        <Body>
          <Text>{this.props.data.name}</Text>
        </Body>
        <Right>
          <Icon
            name="ios-menu-outline"
          />
        </Right>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'transparent'
  }
})

OrderCategoryItem.propTypes = {
  sortHandlers: PropTypes.object,
  data: PropTypes.object.isRequired
}
