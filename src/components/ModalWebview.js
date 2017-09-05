import React from 'react'
import { Modal, View, WebView, Text } from 'react-native'

export default class ModalWebview extends React.Component {
  render () {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.visible}
      >
        <WebView source={{uri: this.props.url}} />
      </Modal>
    )
  }
}
