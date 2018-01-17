import React, { Component } from 'react'
import { WebView } from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class OAuth extends Component {
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
        <Container>
          <Header>
            <Left />
            <Body></Body>
            <Right>
              <Button
                transparent
                onPress={() => {
                  Actions.pop()
                }}
              >
              <Icon
                name="ios-close"
              />
              </Button>
            </Right>
          </Header>
          <WebView
            source={{ uri: this.props.url }}
            onNavigationStateChange={(e) => { this.props.getAccessToken(e) }}
          />
        </Container>
      )
    } else {
      return null
    }
  }
}
