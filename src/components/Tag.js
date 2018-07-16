import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Alert,
} from 'react-native'
import {
  Button,
  Text,
} from 'native-base'

export default class Tag extends Component {
  render () {
    return (
      <Button
        style={styles.tag}
        onPress={() => {
          Alert.alert(
            'タグの削除',
            '実行しますか？',
            [
              {text: 'OK', onPress: () => { this.props.deleteTag(this.props.index) }},
              {text: 'CANCEL'},
            ]
          )
        }}
      >
        <Text style={styles.tagText}>{this.props.tag}</Text>
      </Button>
    )
  }
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: 23,
    height: 30,
    backgroundColor: '#dbdbdb',
    marginRight: 8,
  },
  tagText: {
    lineHeight: 16,
    color: '#6b6b6b',
    fontSize: 16,
  },
})

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  deleteTag: PropTypes.func.isRequired,
}
