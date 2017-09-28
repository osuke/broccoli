import React from 'react'
import { StyleSheet, WebView } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Login extends React.Component {
  componentDidMount () {
    this.props.getRequestToken()
  }

  componentDidUpdate () {
    if (this.props.isLogin) {
      Actions.root()
    }
  }

  render () {
    if (this.props.url) {
      return (
        <WebView
          source={{ uri: this.props.url }}
          onNavigationStateChange={(e) => { this.props.getAccessToken(e) }}
        />
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  btn: {
    fontSize: 16
  }
})
