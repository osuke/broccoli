import React from 'react'
import { View, StyleSheet } from 'react-native'
import NewEntryItems from '../containers/NewEntryItems'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
const renderTabBar = props => (<ScrollableTabBar {...props} style={{ borderBottomColor: '#f6b02c' }} />)

export default class Root extends React.Component {
  render () {
    return (
      <ScrollableTabView
        style={styles.tabs}
        tabBarUnderlineStyle={styles.tab}
        tabBarActiveTextColor="#f6b02c"
        tabBarInactiveTextColor="#b9b9b9"
        renderTabBar={renderTabBar}
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
    backgroundColor: '#fafafa',
  },
  tab: {
    height: 2,
    backgroundColor: '#f6b02c',
  }
})
