import React, { Component } from 'react'
import { TouchableHighlight, StyleSheet } from 'react-native'
import { Text } from 'native-base'

export default class OrderCategoryItem extends Component {
  render () {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          padding: 25,
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}>
        <Text>{this.props.data.name}</Text>
      </TouchableHighlight>
    )
  }
}
