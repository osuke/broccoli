import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Modal } from 'react-native'
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Text
} from 'native-base'
import Icon from './Icon'
import { Actions } from 'react-native-router-flux'

export default class BookmarkForm extends Component {
  constructor (props) {
    super(props)
    this.state = { text: '' }
  }

  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                Actions.pop()
              }}
            >
              <Icon name="ios-close" />
            </Button>
          </Left>
          <Body></Body>
          <Right />
        </Header>
        <Content style={styles.content}>
          <TextInput
            style={styles.comment}
            onChangeText={(text) => { this.setState({text})}}
            value={this.state.text}
          />
          <Button
            style={styles.addButton}
            onPress={() => {
              this.props.saveBookmark(this.props.login, this.props.webview.url, this.state.text)
            }}
            block>
            <Text style={styles.addButtonText}>ブックマークする</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  comment: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderColor: '#e5e5e5',
  },
  header: {
    height: 65,
    backgroundColor: '#fafafa',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1
  },
  headerIcon: {
    fontSize: 28
  },
  closeBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 16,
    marginTop: 28
  },
  addButton: {
    backgroundColor: '#f6b02c'
  },
  addButtonText: {
    color: '#fff'
  }
})
