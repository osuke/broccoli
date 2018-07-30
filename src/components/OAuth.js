import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { WebView } from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Button
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from './Icon'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'

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
          <StyledHeader>
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
            <Body>
              <StyledTitle>ログイン</StyledTitle>
            </Body>
            <Right>
            </Right>
          </StyledHeader>
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

OAuth.propTypes = {
  getRequestToken: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  url: PropTypes.string,
  getAccessToken: PropTypes.func.isRequired
}
