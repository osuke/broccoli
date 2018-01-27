import React, { Component } from 'react'
import { WebView } from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from './Icon'

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
            <Left>
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
            </Left>
            <Body></Body>
            <Right>
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
