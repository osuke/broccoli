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
        >
          <View style={styles.sec}>
            <View style={styles.title}>
              <Text style={styles.titleText}>コメント</Text>
            </View>
            <Input
              autoFocus
              autoCorrect={false}
              multiline={true}
              numberOfLines={6}
              style={styles.comment}
              onChangeText={(text) => { this.setState({text})}}
              value={this.state.text}
              placeholder="コメントを追加"
              placeholderTextColor="#999999"
            />
          </View>

          <View style={styles.sec}>
            <View style={styles.title}>
              <Text style={styles.titleText}>タグ</Text>
            </View>
            <View style={styles.tagSec}>
              <View style={styles.tagInput}>
                <Input
                  style={styles.tagInputField}
                  placeholder="タグを追加"
                  placeholderTextColor="#999999"
                />
              </View>
              <View style={styles.tagList}>
                <Button style={styles.tag}><Text style={styles.tagText}>あとで読む</Text></Button>
                <Button style={styles.tag}><Text style={styles.tagText}>デザイン</Text></Button>
              </View>
            </View>
          </View>
          <View style={styles.submitArea}>
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
    backgroundColor: '#efefef',
    paddingTop: 20,
  },
  sec: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 8,
    paddingLeft: 12,
  },
  titleText: {
    fontSize: 14,
    color: '#6B6B6B',
    fontWeight: 'bold',
  },
  comment: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    backgroundColor: '#fff',
    paddingTop: 12,
    paddingRight: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    fontSize: 16,
    height: 160,
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
    borderRadius: 23,
    width: 196,
    height: 46,
    backgroundColor: '#3dc264',
    flex: 1,
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    marginTop: -4,
    lineHeight: 46,
  },
  deleteButtonText: {
    color: '#fff'
  },
  tagSec: {
    backgroundColor: '#fff',
    paddingLeft: 12,
  },
  tagInputField: {
    paddingLeft: 0,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    fontSize: 16,
  },
  tagList: {
    borderTopWidth: 1,
    borderTopColor: '#d1d1d1',
    paddingTop: 12,
    paddingBottom: 12,
    flex: 1,
    flexDirection: 'row',
  },
  tag: {
    borderRadius: 23,
    height: 30,
    backgroundColor: '#dbdbdb',
    marginRight: 8,
  },
  tagText: {
    lineHeight: 16,
    color: '#6b6b6b',
    fontSize: 16,
  },
  submitArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
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
