import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, StyleSheet } from 'react-native'
import { Text } from 'native-base'

export default class OrderCategoryItem extends Component {
  render () {
    return (
      <TouchableHighlight
        underlayColor={'#eee'}
        style={styles.listItem}
        {...this.props.sortHandlers}>
        <Text>{this.props.data.name}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    padding: 25,
    borderBottomWidth: 1,
    borderColor: '#eee'
  }
})

OrderCategoryItem.propTypes = {
  sortHandlers: PropTypes.object,
  data: PropTypes.object.isRequired
}
