import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  WebView,
  Share,
  Linking,
  StyleSheet
} from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Footer,
  FooterTab,
  Spinner
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from './Icon'

export default class ArticleDetail extends Component {
  componentDidMount () {
    if (this.props.login.isLogin) {
      this.props.fetchBookmarkData(this.props.login, this.props.webview.url)
    }
  }

  render () {
    const isLogin = this.props.login.isLogin
    return (
      <Container>
        {this.props.webview.isLoading ? (
          <Spinner
            color="#000"
            style={styles.spinner}
          />
        ) : (
          null
        )} 
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
          onLoadStart={this.props.showSpinner}
          onLoadEnd={this.props.hideSpinner}
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

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    zIndex: 100,
    top: 100,
    left: 0,
    right: 0
  }
})

ArticleDetail.propTypes = {
  login: PropTypes.object.isRequired,
  fetchBookmarkData: PropTypes.func.isRequired,
  webview: PropTypes.object.isRequired,
  getCommentsFromApi: PropTypes.func.isRequired
}
