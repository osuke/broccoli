import React from 'react'
import { View, Text } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

export default class Root extends React.Component {
  render () {
    return (
        <ScrollableTabView
          style={{marginTop: 20}}
          tabBarUnderlineStyle={{display: 'none'}}
          renderTabBar={ () => <ScrollableTabBar /> }
        >
          {
            this.props.category.map((data, index) => {
              return (
                <View tabLabel={data.name} key={('cat' + index)}>
                  <View>
                    <Text>{data.name}</Text>
                  </View>
                </View>
              )
            })
          }
        </ScrollableTabView>
    )
  }
}
