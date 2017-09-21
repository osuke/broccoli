import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

export default class Comment extends React.Component {
  render () {
    if (this.props.comment.length > 0) {
      const userImage = 'https://cdn1.www.st-hatena.com/users/sl/' + this.props.user + '/profile.gif'
      return (
        <View style={styles.container}>
          <View>
            <Image
              style={styles.image}
              source={{uri: userImage}}
            />
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.text}>{this.props.comment}</Text>
          </View>
        </View>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    padding: 16,
    paddingBottom: 16,
    flexDirection: 'row',
  },
  textWrap: {
    flex: 1,
    paddingLeft: 16
  },
  text: {
    fontSize: 16,
    lineHeight: 20,
  },
  image: {
    width: 32,
    height: 32,
  }
})
