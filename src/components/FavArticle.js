import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class FavArticle extends React.Component {
  render () {
    const userImage = 'https://cdn1.www.st-hatena.com/users/sl/' + this.props.creator + '/profile.gif'

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.showPage(this.props)
          Actions.externalPage()
        }}
      >
        <View style={styles.title}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
        <View style={styles.user}>
          <View>
            <Image
              style={styles.image}
              source={{uri: userImage}}
            />
          </View>
          <View style={styles.textWrap}>
            <Text style={styles.text}>{this.props.creator}</Text>
            <Text style={styles.text}>{this.props.description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    padding: 16,
  },
  title: {
  },
  user: {
    paddingTop: 10,
    flexDirection: 'row',
  },
  textWrap: {
    flex: 1,
    paddingLeft: 8
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
