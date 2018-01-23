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
  Icon,
  Footer,
  FooterTab
} from 'native-base'
import { Feather } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux'

export default class ArticleDetail extends Component {
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
              <Feather
                name="chevron-left"
                style={styles.headerIcon}
              />
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
              <Feather
                name="share"
                style={styles.footerIcon}
              />
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
              <Feather
                name="edit"
                style={styles.footerIcon}
              />
            </Button>
            <Button
              onPress={() => {
                this.props.getCommentsFromApi(this.props.webview.url)
                Actions.comment()
              }}
            >
              <Feather
                name="message-square"
                style={styles.footerIcon}
              />
            </Button>
            <Button
              onPress={() => {
                Linking.openURL(this.props.webview.url) 
              }}
            >
              <Feather
                name="compass"
                style={styles.footerIcon}
              />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  headerIcon: {
    fontSize: 28
  },
  footerIcon: {
    fontSize: 24
  }
})
