import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  ListItem,
  Thumbnail,
  Body,
  Text
} from 'native-base'

export default class Comment extends Component {
  render () {
    if (this.props.comment.length > 0) {
      const userImage = 'https://cdn1.www.st-hatena.com/users/sl/' + this.props.user + '/profile.gif'
      return (
        <ListItem>
          <Thumbnail
            small
            source={{uri: userImage}}
            style={styles.thumbnail}
          />
          <Body>
            <Text style={styles.user}>{this.props.user}</Text>
            <Text style={styles.comment}>{this.props.comment}</Text>
          </Body>
        </ListItem>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    alignSelf: 'flex-start'
  },
  user: {
    fontSize: 14,
    marginBottom: 2
  },
  comment: {
    alignSelf: 'flex-start',
    fontSize: 14,
    lineHeight: 20
  }
})

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}
