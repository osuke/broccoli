import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
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
import {
  TEXT_COLOR_PRIMARY,
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_PRIMARY,
  BACKGROUND_COLOR_GRAY,
} from '../constants/styles.js'
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
              </ListItem>
            </List>
          ) : (
            null
          )}
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
    backgroundColor: BACKGROUND_COLOR_GRAY,
    paddingTop: 20,
  },
  list: {
    borderTopWidth: BORDER_WIDTH_PRIMARY,
    borderTopColor: BORDER_COLOR_PRIMARY,
    marginBottom: 16,
  },
  listItem: {
    backgroundColor: '#fff',
    marginLeft: 0,
  },
  listItemOrderBody: {
    paddingLeft: 16,
  },
  text: {
    color: TEXT_COLOR_PRIMARY,
  },
  logoutText: {
    color: TEXT_COLOR_PRIMARY,
    textAlign: 'center',
  },
})

Login.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}
