import React from 'react'

import { StyleSheet, WebView, View, Text } from 'react-native'

export default class AppBrowser extends React.Component {
  render () {
    console.log('hoge')
    let url = ''

    if (this.props.screenNum === 0) {
      url = 'http://www.rakuten.co.jp'
    } else if(this.props.screenNum === 1) {
      url = 'http://www.yahoo.co.jp'
    } else {
      url = 'http://www.google.co.jp'
    }
    return (
      <View style={{width: '100%', height: '100%'}}>
        <WebView
          source={{uri: url}}
          style={{width: 300, height: 300, backgroundColor: '#000'}}
        />
      </View>
    )
  }
}
