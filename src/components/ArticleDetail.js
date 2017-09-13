import React from 'react'
import { View, Text, WebView, TouchableOpacity, StyleSheet } from 'react-native'
import { EvilIcons } from '@expo/vector-icons'

export default class ModalWebview extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: this.props.url}}
          style={styles.webview}
        />
        <View style={styles.tabBar}>
          <TouchableOpacity style={styles.tabBtn}>
            <EvilIcons name="share-apple" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn}>
            <EvilIcons name="plus" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn}>
            <EvilIcons name="comment" size={32} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  webview: {
    flex: 1
  },
  tabBar: {
    flexDirection: 'row',
    height: 49,
    borderTopColor: '#dfdfdf',
    borderTopWidth: 1
  },
  tabBtn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabText: {
    textAlign: 'center'
  }
})
