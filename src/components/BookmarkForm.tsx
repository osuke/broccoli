import * as React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Button,
  Text,
  Input
} from 'native-base'
import {
  TEXT_COLOR_PRIMARY,
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_PRIMARY,
  BACKGROUND_COLOR_GRAY,
  PLACEHOLDER_COLOR,
  TITLE_COLOR_PRIMARY,
} from '../constants/styles'
import Icon from './Icon'
import Tag from './Tag'
import Btn from './Btn'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import { Actions } from 'react-native-router-flux'

interface IProps {
  bookmark: any
  fetchBookmarkData: any
  webview: any
  saveBookmark: any
  deleteBookmark: any
  login: any
}

interface IState {
  text: string
  tagText: string
  tags: string[]
}

export default class BookmarkForm extends React.Component<IProps, IState> {
  constructor (props) {
    super(props)
    this.state = {
      text: this.props.bookmark.comment,
      tagText: '',
      tags: [],
    }
  }

  createTag () {
    if (this.state.tagText.length < 1) return

    let tags = this.state.tags
    tags.push(this.state.tagText)

    this.setState({
      tagText: '',
      tags,
    })
  }

  deleteTag (index) {
    let tags = this.state.tags
    tags.splice(index, 1)
    this.setState({
      tags,
    })
  }

  mergeCommentAndTags () {
    let comment = this.state.text
    let tags = ''
    if (this.state.tags.length > 0) {
      this.state.tags.map(tag => {
        tags += `[${tag}]`
      })
    }
    return tags + comment
  }

  renderTags () {
    if (this.state.tags.length < 1) return null

    const Tags = this.state.tags.map((tag, index) => (
      <Tag
        tag={tag}
        deleteTag={this.deleteTag.bind(this)}
        index={index}
        key={`${tag}-${index}`}
      />
    ))
    return (
      <ScrollView
        style={styles.tagList}
        horizontal={true}
      >
        {Tags}
      </ScrollView>
    )
  }

  pressSaveButton () {
    this.props.saveBookmark(this.props.login, this.props.webview.url, this.mergeCommentAndTags())
    Actions.pop()
  }

  componentDidMount () {
    this.setState({
      text: this.props.bookmark.comment,
      tags: this.props.bookmark.tags,
    })
  }

  render () {
    return (
      <Container>
        <StyledHeader>
          <Left>
            <Button
              transparent
              onPress={Actions.pop}
            >
              <Icon name="close" />
            </Button>
          </Left>
          <Body>
            <StyledTitle>ブックマーク</StyledTitle>
          </Body>
          <Right>
            {this.props.bookmark.isBookmark &&
              (
                <View style={styles.deleteBtn}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.deleteBookmark(this.props.login, this.props.webview.url)
                      Actions.pop()
                    }}
                  >
                    <Text>削除</Text>
                  </TouchableOpacity>
                </View>
              )
            }
          </Right>
        </StyledHeader>
        <ScrollView
          style={styles.content}
          keyboardShouldPersistTaps="handled"
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
              onChangeText={text => { this.setState({text}) }}
              value={this.state.text}
              placeholder="コメントを追加"
              placeholderTextColor={PLACEHOLDER_COLOR}
            />
          </View>

          <View style={styles.sec}>
            <View style={styles.title}>
              <Text style={styles.titleText}>タグ</Text>
            </View>
            <View style={styles.tagSec}>
              <View>
                <Input
                  style={styles.tagInputField}
                  placeholder="タグを追加"
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  value={this.state.tagText}
                  onChangeText={tagText => {
                    this.setState({
                      tagText
                    })
                  }}
                  onSubmitEditing={this.createTag.bind(this)}
                />
              </View>
              {this.renderTags()}
            </View>
          </View>
          <View style={styles.submitArea}>
            <View>
              <Btn
                onPress={this.pressSaveButton.bind(this)}
              >保存する</Btn>
            </View>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR_GRAY,
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
    color: TITLE_COLOR_PRIMARY,
    fontWeight: 'bold',
  },
  comment: {
    borderTopWidth: BORDER_WIDTH_PRIMARY,
    borderTopColor: BORDER_COLOR_PRIMARY,
    borderBottomWidth: BORDER_WIDTH_PRIMARY,
    borderBottomColor: BORDER_COLOR_PRIMARY,
    backgroundColor: '#fff',
    paddingTop: 12,
    paddingRight: 12,
    paddingLeft: 12,
    paddingBottom: 12,
    fontSize: 16,
    height: 160,
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
  tagSec: {
    backgroundColor: '#fff',
    paddingLeft: 12,
    borderTopWidth: BORDER_WIDTH_PRIMARY,
    borderTopColor: BORDER_COLOR_PRIMARY,
    borderBottomWidth: BORDER_WIDTH_PRIMARY,
    borderBottomColor: BORDER_COLOR_PRIMARY,
  },
  tagInputField: {
    paddingLeft: 0,
    paddingTop: 12,
    paddingRight: 12,
    paddingBottom: 12,
    fontSize: 16,
  },
  tagList: {
    borderTopWidth: BORDER_WIDTH_PRIMARY,
    borderTopColor: BORDER_COLOR_PRIMARY,
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
    color: TEXT_COLOR_PRIMARY,
    fontSize: 16,
  },
  submitArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 32,
  },
  deleteBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
})
