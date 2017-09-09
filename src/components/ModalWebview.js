import React from 'react'
import { Modal, View, WebView, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

export default class ModalWebview extends React.Component {
  render () {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.webview.visible}
      >
        <View style={styles.header}>
          <TouchableOpacity
            onPress={ () => { this.props.hidePage() } }
            style={styles.backBtn}
          >
            <EvilIcons
              name="chevron-left"
              size={44}
              color="#a0a0a0"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <WebView source={{uri: this.props.webview.url}} />
      </Modal>
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
