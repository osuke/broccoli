import React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class Login extends React.Component {
  render () {
    if (this.props.isLogin) {
      return (
        <Text style={styles.btn}>{this.props.userData.displayName}でログイン中</Text>
      )
    } else {
      return (
        <Container style={styles.container}>
          <Button
            style={styles.btn}
            onPress={() => {
              Actions.login()
            }}
            block>
            <Text style={styles.btnText}>ログインする</Text>
          </Button>
        </Container>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  btn: {
    backgroundColor: '#f6b02c'
  },
  btnText: {
    color: '#fff'
  }
})
