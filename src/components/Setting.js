import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Header,
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Body,
  Right,
  Left
} from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class Login extends React.Component {
  render () {
    return (
      <Container>
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
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            {this.props.isLogin ? (
              <ListItem
                onPress={() => {
                  this.props.logout()
                }}
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
