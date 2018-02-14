import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, View } from 'react-native'
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Text,
  Input
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
          <Input
            multiline = {true}
            numberOfLines = {6}
            style={styles.comment}
            onChangeText={(text) => { this.setState({text})}}
            value={this.state.text}
          />
          <View style={styles.btnWrap}>
            <Button
              style={styles.addBtn}
              light
              onPress={() => {
                this.props.saveBookmark(this.props.login, this.props.webview.url, this.state.text)
                Actions.pop()
              }}
              block
            >
              <Text>ブックマークする</Text>
            </Button>
          </View>
          {this.props.bookmark.isBookmark &&
            (
              <View style={styles.btnWrap}>
                <Button
                  danger
                  onPress={() => {
                    this.props.deleteBookmark(this.props.login, this.props.webview.url)
                    Actions.pop()
                  }}
                  block
                >
                  <Text style={styles.deleteButtonText}>削除する</Text>
                </Button>
              </View>
            )
          }
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 16,
    backgroundColor: '#efefef'
  },
  comment: {
    height: 140,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
    paddingTop: 12,
    paddingRight: 12,
    paddingLeft: 12,
    paddingBottom: 12
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
  btnWrap: {
    paddingLeft: 12,
    paddingRight: 12
  },
  addBtn: {
    backgroundColor: '#fff',
    marginBottom: 12
  },
  deleteButtonText: {
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
