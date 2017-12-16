import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Login extends React.Component {
  render () {
    if (this.props.isLogin) {
      return (
        <Text style={styles.btn}>{this.props.userData.displayName}でログイン中</Text>
      )
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            Actions.login()
          }}
        >
          <Text style={styles.btn}>ログインする</Text>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  btn: {
    fontSize: 16
  }
})
