import React from 'react'
import { View, ScrollView, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native'
import FavArticle from './FavArticle'
import { Actions } from 'react-native-router-flux'

export default class FavItems extends React.Component {
  componentDidMount () {
    if (this.props.login.isLogin) {
      this.props.getFavArticlesFromApi(this.props.data.url, this.props.index, this.props.login.userData.urlName, this.props.data.offset)
    }
  }

  render () {
    if (this.props.login.isLogin) {
      return (
        <FlatList
          data={this.props.data.items}
          renderItem={({item}) => (<FavArticle {...item} showPage={this.props.showPage} />)}
          keyExtractor={(item, index) => ('article' + index)}
          onEndReached={() => {
            this.props.getFavArticlesFromApi(this.props.data.url, this.props.index, this.props.login.userData.urlName, this.props.data.offset + 25)
          }}
          onEndReachedThreshold={0}
        />
      )
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            Actions.login()
          }}
        >
          <Text style={styles.btn}>ログインする</Text>
        </TouchableOpacity>
      )
    }
  }
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff'
  },
})
