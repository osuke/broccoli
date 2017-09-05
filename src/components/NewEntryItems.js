import React from 'react'
import { View, ScrollView, Text, FlatList } from 'react-native'
import Article from './Article'
import ModalWebview from '../components/ModalWebview'

export default class NewEntryItems extends React.Component {
  componentDidMount () {
    this.props.getArticlesFromApi(this.props.data.url, this.props.index)
  }

  render () {
    return (
      <ScrollView>
        <FlatList
          data={this.props.data.items}
          renderItem={({item}) => (<Article {...item} showPage={this.props.showPage} />)}
          keyExtractor={(item, index) => ('article' + index)}
        />
        <ModalWebview {...this.props.webview} />
      </ScrollView>
    )
  }
}
