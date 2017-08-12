import React from 'react'

import { View, Text, TabBarIOS } from 'react-native'

export default class Tabs extends React.Component {
  render () {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon='search'
          onPress={() => { this.props.switchTabs(0) }}
          selected={ this.props.currentTab === 0 }>
          <View>
            <Text>Tab1</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='favorites'
          onPress={() => { this.props.switchTabs(1) }}
          selected={ this.props.currentTab === 1 }>
          <View>
            <Text>Tab2</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='bookmarks'
          onPress={() => { this.props.switchTabs(2) }}
          selected={ this.props.currentTab === 2 }>
          <View>
            <Text>Tab3</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
