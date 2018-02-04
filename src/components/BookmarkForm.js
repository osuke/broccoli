import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput } from 'react-native'
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
    this.state = { text: this.props.bookmark.comment }
  }

  componentDidMount () {
    this.setState({
      text: this.props.bookmark.comment
    })
  }
  
  componentWillUnmount () {
    this.props.fetchBookmarkData(this.props.login, this.props.webview.url)
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
            light
            onPress={() => {
              this.props.saveBookmark(this.props.login, this.props.webview.url, this.state.text)
              Actions.pop()
            }}
            block
          >
            <Text>ブックマークする</Text>
          </Button>
          {this.props.bookmark.isBookmark &&
            (
              <Button
                danger
                onPress={() => {
                  this.props.deleteBookmark(this.props.login, this.props.webview.url)
                  Actions.pop()
                }}
                block
              >
                <Text style={styles.addButtonText}>削除する</Text>
              </Button>
            )
          }
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

BookmarkForm.propTypes = {
  bookmark: PropTypes.object.isRequired,
  fetchBookmarkData: PropTypes.func.isRequired,
  webview: PropTypes.object.isRequired,
  saveBookmark: PropTypes.func.isRequired,
  deleteBookmark: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired,
  bookmark: PropTypes.object.isRequired,
}
