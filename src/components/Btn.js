import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
} from 'react-native'
import {
  Button,
  Text,
  View,
} from 'native-base'

const Btn = ({ children, onPress }) => (
  <View style={styles.btnWrap}>
    <Button
      transparent
      style={styles.btn}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{children}</Text>
    </Button>
  </View>
)

const styles = StyleSheet.create({
  btnWrap: {
    height: 46,
  },
  btn: {
    width: 196,
    borderRadius: 23,
    backgroundColor: '#3dc264',
    flex: 1,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    marginTop: -4,
    lineHeight: 46,
  },
})

Btn.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func,
}

export default Btn