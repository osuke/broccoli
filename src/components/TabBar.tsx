import * as React from 'react'
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

interface IProps {
  login: any
  title: any
  url: any
  getCommentsFromApi: any
  fetchBookmarkData: any
}

const TabBar: React.SFC<IProps> = ({ title, url, login, getCommentsFromApi, fetchBookmarkData }) => (
  <Footer style={styles.container as any}>
    <FooterTab style={styles.footerTab as any}>
      <Button
        onPress={() => {
          Share.share({
            title: 'Share with',
            message: title,
            url: url
          })
        }}
      >
        <Icon name="share-variant" />
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
        <Icon name="pencil-box-outline" />
      </Button>
      <Button
        onPress={() => {
          getCommentsFromApi(url)
          Actions.comment()
        }}
      >
        <Icon name="comment-multiple-outline" />
      </Button>
      <Button
        onPress={() => {
          Linking.openURL(url)
        }}
      >
        <Icon name="compass-outline" />
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

export default TabBar
