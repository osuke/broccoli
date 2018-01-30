import React, { Component } from 'react'
import {
  WebView,
  Share,
  Linking,
  StyleSheet
} from 'react-native'
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Footer,
  FooterTab
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from './Icon'

export default class ArticleDetail extends Component {
  componentDidMount () {
    this.props.fetchBookmarkData(this.props.login, this.props.webview.url)
  }

  render () {
    const isLogin = this.props.login.isLogin
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
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body></Body>
          <Right></Right>
        </Header>
        <WebView
          source={{uri: this.props.webview.url}}
        />
        <Footer>
          <FooterTab>
            <Button
              onPress={() => {
                Share.share({
                  title: 'Share with',
                  message: this.props.webview.title,
                  url: this.props.webview.url
                })
              }}
            >
              <Icon name="ios-share-outline" />
            </Button>
            <Button
              onPress={() => {
                if (isLogin) {
                  Actions.bookmarkForm()
                } else {
                  Actions.login()
                }
              }}
            >
              <Icon name="ios-create-outline" />
            </Button>
            <Button
              onPress={() => {
                this.props.getCommentsFromApi(this.props.webview.url)
                Actions.comment()
              }}
            >
              <Icon name="ios-text-outline" />
            </Button>
            <Button
              onPress={() => {
                Linking.openURL(this.props.webview.url) 
              }}
            >
              <Icon name="ios-compass-outline" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
