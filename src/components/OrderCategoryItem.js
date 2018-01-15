import React from 'react'
import { TouchableHighlight, StyleSheet } from 'react-native'
import { Text } from 'native-base'

export default class OrderCategoryItem extends React.Component {
  render () {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}>
        <Text>{this.props.data.name}</Text>
      </TouchableHighlight>
    )
  }
}
