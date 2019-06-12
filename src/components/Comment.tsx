import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  ListItem,
  Thumbnail,
  Body,
  Left,
  Text
} from 'native-base'

interface IProps {
  comment: string
  user: string
}

const Comment: React.SFC<IProps> = ({ comment, user }) => {
  if (comment.length > 0) {
    const userImage = `https://cdn1.www.st-hatena.com/users/sl/${user}/profile.gif`
    return (
      <ListItem
        avatar
        style={styles.item}
      >
        <Left
          style={{
            paddingLeft: 16
          }}
        >
          <Thumbnail
            small
            source={{ uri: userImage }}
          />
        </Left>
        <Body>
          <Text style={styles.user}>{user}</Text>
          <Text style={styles.comment}>{comment}</Text>
        </Body>
      </ListItem>
    )
  } else {
    return null
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    marginLeft: 0
  },
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

export default Comment
