import React from 'react'
import { View, WebView, TouchableOpacity, Share, Linking, StyleSheet } from 'react-native'
import { EvilIcons, Ionicons } from '@expo/vector-icons'
import CommentList from '../containers/CommentList'

export default class ArticleDetail extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <WebView
          source={{uri: this.props.url}}
          style={styles.webview}
        />
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={styles.tabBtn}
            onPress={() => {
              Share.share({
                title: 'Share with',
                message: this.props.title,
                url: this.props.url
              })
            }}
            >
            <EvilIcons name="share-apple" size={32} color="#f6b02c" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabBtn}>
            <EvilIcons name="plus" size={32} color="#f6b02c" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { this.props.getCommentsFromApi(this.props.url) }}
            style={styles.tabBtn}>
            <EvilIcons name="comment" size={32} color="#f6b02c" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { Linking.openURL(this.props.url) }}
            style={styles.tabBtn}>
            <Ionicons name="ios-browsers-outline" size={32} color="#f6b02c" />
          </TouchableOpacity>
        </View>
        <CommentList />
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
    borderTopColor: '#e5e5e5',
    borderTopWidth: 1,
    backgroundColor: '#fafafa'
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
