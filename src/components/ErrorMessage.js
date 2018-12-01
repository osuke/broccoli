import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class ErrorMessage extends Component {
  render () {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>しばらく時間を空けてから、もう一度お試しください</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  error: {
    paddingTop: 24,
  },
  errorText: {
    fontSize: 14,
    textAlign: 'center',
  },
})

ErrorMessage.propTyper = {
  getArticlesFromApi: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  index: PropTypes.string.isRequired,
}