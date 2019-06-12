import * as React from 'react'
import {
  View,
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
import { IStateToProps, IDispatchToProps } from '../containers/ArticleDetail'

type IProps = IStateToProps & IDispatchToProps

export default class ArticleDetail extends React.Component<IProps, {}> {
  componentDidMount () {
    if (this.props.login.isLogin && this.props.webview.url) {
      this.props.fetchBookmarkData(this.props.login, this.props.webview.url)
    }
  }

  render () {
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
              onPress={Actions.pop}
            >
              <Icon name="chevron-left" />
            </Button>
          </Left>
          <Body />
          <Right />
        </StyledHeader>
        {this.props.webview.url &&
          <WebView
            source={{ uri: this.props.webview.url }}
            onLoadStart={this.props.showSpinner}
            onLoadEnd={this.props.hideSpinner}
            renderError={() => <View />}
          />
        }
        <TabBar
          url={this.props.webview.url}
          title={this.props.webview.title}
          login={this.props.login}
          getCommentsFromApi={this.props.getCommentsFromApi}
          fetchBookmarkData={this.props.fetchBookmarkData}
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
