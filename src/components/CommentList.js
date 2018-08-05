import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Text,
  Button,
} from 'native-base'
import {
  BACKGROUND_COLOR_GRAY,
} from '../constants/styles'
import Comment from './Comment'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import Icon from './Icon'
import { Actions } from 'react-native-router-flux'

export default class CommentList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isInitial: true
    }
  }

  componentDidMount () {
    this.setState({
      isInitial: false
    })
  }

  componentWillMount () {
    this.setState({
      isInitial: true
    })
  }

  getCommentItems () {
    let comments = []

    this.props.items.map(item => {
      if (item.comment.length > 0) {
        comments.push(item)
      }
    })

    return comments
  }

  render () {
    const items = this.getCommentItems()

    return (
      <Container>
        <StyledHeader>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.closeComments()
                Actions.pop()
              }}
            >
              <Icon
                name="ios-close"
              />
            </Button>
          </Left>
          <Body>
            <StyledTitle>コメント</StyledTitle>
          </Body>
          <Right />
        </StyledHeader>
        <FlatList
          style={styles.wrap}
          data={items}
          ListEmptyComponent={() => {
            if (this.props.items.length > 0) {
              return (
                <View style={styles.noResult}>
                  <Text style={styles.noResultText}>コメントはありません</Text>
                </View>
              )
            } else {
              return null
            }
          }}
          renderItem={({item}) => {
            return <Comment {...item} />
          }}
          keyExtractor={(item, index) => `comment-${index}`}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: BACKGROUND_COLOR_GRAY,
  },
  noResult: {
    paddingTop: 24,
  },
  noResultText: {
    textAlign: 'center',
  },
})

CommentList.propTypes = {
  items: PropTypes.array.isRequired,
  closeComments: PropTypes.func.isRequired,
}
