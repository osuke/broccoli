import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Dimensions,
  Keyboard
} from 'react-native'
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
    this.state = {
      text: this.props.bookmark.comment,
      inputHeight: 0
    }
  }

  setHeightToInput (e) {
    const keyboardHeight = e.endCoordinates.height
    const { height } = Dimensions.get('window')
    const tabsHeight = 108
    this.setState({
      inputHeight: height - keyboardHeight - tabsHeight
    })
  }

  componentDidMount () {
    this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.setHeightToInput.bind(this))
    this.setState({
      text: this.props.bookmark.comment
    })
  }
  
  componentWillUnmount () {
    this.props.fetchBookmarkData(this.props.login, this.props.webview.url)
    this.keyboardWillShowListener.remove()
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
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="always"
          scrollEnabled={false}
        >
          <Input
            autoFocus
            autoCorrect={false}
            multiline = {true}
            numberOfLines = {6}
            style={[styles.comment, {height: this.state.inputHeight}]}
            onChangeText={(text) => { this.setState({text})}}
            value={this.state.text}
          />
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', backgroundColor: '#fff' }}>
            <View>
              <Button
                onPress={() => {
                  this.props.saveBookmark(this.props.login, this.props.webview.url, this.state.text)
                  Actions.pop()
                }}
                transparent
                style={styles.btn}
              >
                <Text style={styles.btnText}>保存する</Text>
              </Button>
            </View>
            {this.props.bookmark.isBookmark &&
              (
                <View>
                  <Button
                    onPress={() => {
                      this.props.deleteBookmark(this.props.login, this.props.webview.url)
                      Actions.pop()
                    }}
                    style={styles.btn}
                    transparent
                    rounded={false}
                  >
                    <Text style={styles.btnText}>削除する</Text>
                  </Button>
                </View>
              )
            }
          </View>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#efefef'
  },
  comment: {
    borderColor: 'gray',
    borderBottomWidth: 1,
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
    alignItems: 'center',
    marginRight: 16,
    marginTop: 28
  },
  btn: {
    borderLeftWidth: 1,
    borderLeftColor: '#e5e5e5',
    borderRadius: 0,
  },
  btnText: {
    color: '#222',
    fontSize: 14,
    marginTop: -4
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
