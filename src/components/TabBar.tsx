import * as React from 'react'
import {
  Share,
  Linking,
  StyleSheet
} from 'react-native'
import {
  Button,
  Footer,
  FooterTab
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_SECONDARY
} from '../constants/styles'
import Icon from './Icon'
import { ILoginState } from '../reducers/login'

interface IProps {
  login: ILoginState
  title?: string
  url?: string
  fetchBookmarkData: (loginData: ILoginState, url: string) => void
  getCommentsFromApi: (url: string) => void
}

const TabBar: React.SFC<IProps> = ({ title, url, login, getCommentsFromApi, fetchBookmarkData }) => {
  if (url) {
    return (
      <Footer style={styles.container}>
        <FooterTab style={styles.footerTab}>
          <Button
            onPress={() => {
              Share.share({
                title: title,
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
  } else {
    return null
  }

}

const styles = StyleSheet.create({
  container: {
    borderTopColor: BORDER_COLOR_SECONDARY,
    borderTopWidth: BORDER_WIDTH_PRIMARY
  },
  footerTab: {
    backgroundColor: '#fafafa'
  }
})

export default TabBar
