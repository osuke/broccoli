import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  PixelRatio,
} from 'react-native'
import {
  Button,
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Right,
  Left,
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import Icon from './Icon'

export default class Login extends React.Component {
  render () {
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
            <StyledTitle>設定</StyledTitle>
          </Body>
          <Right />
        </StyledHeader>
        <Content style={styles.content}>
          <List style={styles.list}>
            <ListItem
              onPress={() => {
                Actions.order()
              }}
              style={styles.listItem}
              icon>
              <Body
                style={styles.listItemOrderBody}
              >
                <Text style={styles.text}>カテゴリを並び替える</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
          {this.props.isLogin ? (
            <List style={styles.list}>
              <ListItem
                onPress={() => {
                  this.props.logout()
                }}
                style={styles.listItem}
                icon
              >
                <Body>
                  <Text style={styles.logoutText}>ログアウト</Text>
                </Body>
                <Right />
              </ListItem>
            </List>
            ) : (
              null
            )
          }
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  content: {
    backgroundColor: '#efefef',
    paddingTop: 20,
  },
  list: {
    borderTopWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
    borderTopColor: '#c9c9c9',
  },
  listItem: {
    backgroundColor: '#fff',
    marginLeft: 0,
    marginBottom: 16,
  },
  listItemOrderBody: {
    paddingLeft: 16,
  },
  text: {
    color: '#333',
  },
  logoutText: {
    color: '#333',
    textAlign: 'center',
  },
})

Login.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}
