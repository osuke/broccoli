import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Share,
  Linking,
  StyleSheet
} from 'react-native'
import {
  Button,
  Footer,
  FooterTab,
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_SECONDARY,
} from '../constants/styles.js'
import Icon from './Icon'

const TabBar = ({ title, url, login, getCommentsFromApi, fetchBookmarkData }) => (
  <Footer style={styles.container}>
    <FooterTab style={styles.footerTab}>
      <Button
        onPress={() => {
          Share.share({
            title: 'Share with',
            message: title,
            url: url
          })
        }}
      >
        <Icon name="ios-share-outline" />
      </Button>
      <Button
        onPress={() => {
          if (login.isLogin) {
            fetchBookmarkData(login, url)
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
          getCommentsFromApi(url)
          Actions.comment()
        }}
      >
        <Icon name="ios-text-outline" />
      </Button>
      <Button
        onPress={() => {
          Linking.openURL(url)
        }}
      >
        <Icon name="ios-compass-outline" />
      </Button>
    </FooterTab>
  </Footer>
)

const styles = StyleSheet.create({
  container: {
    borderTopColor: BORDER_COLOR_SECONDARY,
    borderTopWidth: BORDER_WIDTH_PRIMARY,
  },
  footerTab: {
    backgroundColor: '#fafafa',
  }
})

TabBar.propTypes = {
  login: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  getCommentsFromApi: PropTypes.func.isRequired,
  fetchBookmarkData: PropTypes.func.isRequired,
}

export default TabBar
