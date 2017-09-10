import React from 'react'
import { Modal, View, WebView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

export default class ModalWebview extends React.Component {
  render () {
    console.log(this.props.url)
    return (
        <WebView source={{uri: this.props.url}} />
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    height: 46,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  backBtn: {
    width: 45,
    backgroundColor: 'transparent'
  },
  icon: {
    marginTop: 5,
    marginLeft: 0,
  }
})
