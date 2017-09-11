import React from 'react'
import { View, StyleSheet } from 'react-native'
import NewEntryItems from '../containers/NewEntryItems'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

export default class Root extends React.Component {
  render () {
    return (
      <ScrollableTabView
        style={styles.tabs}
        tabBarUnderlineStyle={{display: 'none'}}
        renderTabBar={ () => <ScrollableTabBar /> }
      >
        {
          this.props.category.items.map((data, index) => {
            return (
              <View tabLabel={data.name} key={('catTab' + index)} >
                <NewEntryItems data={data} index={index} key={('cat' + index)} />
              </View>
            )
          })
        }
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    marginTop: 20,
    backgroundColor: '#fff'
  },
})
