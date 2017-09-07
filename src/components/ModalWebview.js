import React from 'react'
import { Modal, View, WebView, Text, TouchableOpacity } from 'react-native'

export default class ModalWebview extends React.Component {
  render () {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.webview.visible}
      >
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={ () => { this.props.hidePage() } }
          >
            <Text>戻る</Text>
          </TouchableOpacity>
        </View>
        <WebView source={{uri: this.props.webview.url}} />
      </Modal>
    )
  }
}
