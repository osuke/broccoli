import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  WebView,
  StyleSheet
} from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Button,
  Spinner
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from './Icon'
import StyledHeader from './StyledHeader'
import TabBar from './TabBar'

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
            size="small"
            style={styles.spinner}
          />
        ) : (
          null
        )}
        <StyledHeader>
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
          <Body />
          <Right />
        </StyledHeader>
        <WebView
          source={{uri: this.props.webview.url}}
          onLoadStart={this.props.showSpinner}
          onLoadEnd={this.props.hideSpinner}
        />
        <TabBar
          {...this.props.webview}
          isLogin={isLogin}
          getCommentsFromApi={this.props.getCommentsFromApi}
        />
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