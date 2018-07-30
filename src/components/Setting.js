import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
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
        <Content>
          <List>
            <ListItem
              onPress={() => {
                Actions.order()
              }}
              style={styles.listItem}
              icon>
              <Body>
                <Text>タブを並び替える</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            {this.props.isLogin ? (
              <ListItem
                onPress={() => {
                  this.props.logout()
                }}
                style={styles.listItem}
                icon
              >
                <Body>
                  <Text>ログアウト</Text>
                </Body>
                <Right />
              </ListItem>
            ) : (
              null
            )
            }
          </List>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  listItem: {
    backgroundColor: 'transparent'
  }
})

Login.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}
