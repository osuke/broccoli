import React from 'react'
import { View, Text, TabBarIOS } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers/app'
import Tabs from './src/containers/Tabs'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import AppBrowser from './src/containers/AppBrowser'

const store = createStore(reducer)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <ScrollableTabView
          style={{marginTop: 20}}
          tabBarUnderlineStyle={{display: 'none'}}
          renderTabBar={ () => <ScrollableTabBar /> }
        >
          <View tabLabel="総合">
            <View style={{backgroundColor: '#eee'}}>
              <Text>総合</Text>
            </View>
          </View>
          <View tabLabel="一般">
            <View style={{backgroundColor: '#eee'}}>
              <Text>一般</Text>
            </View>
          </View>
          <View tabLabel="テクノロジー">
            <View style={{backgroundColor: '#eee'}}>
              <Text>テクノロジー</Text>
            </View>
          </View>
          <View tabLabel="政治経済">
            <Text>政治経済</Text>
          </View>
          <View tabLabel="おもしろ">
            <Text>おもしろ</Text>
          </View>
          <View tabLabel="ぴよ">
            <Text>ぴよ</Text>
          </View>
          <View tabLabel="ふが">
            <Text>ふが</Text>
          </View>
          <View tabLabel="ほげ">
            <Text>ほげ</Text>
          </View>
        </ScrollableTabView>
      </Provider>
    )
  }
}
