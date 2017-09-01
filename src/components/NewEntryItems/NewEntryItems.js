import React from 'react'
import { View, ScrollView, Text, ListView } from 'react-native'

export default class NewEntry extends React.Component {
  render () {
    return (
      <ScrollView>
        <View>
          <Text>{this.props.data.name}</Text>
        </View>
      </ScrollView>
    )
  }
}
