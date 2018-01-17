import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Text } from 'native-base'
import NewEntryItems from '../containers/NewEntryItems'
import FavItems from '../containers/FavItems'
import MyBookmark from '../containers/MyBookmark'
import Setting from '../containers/Setting'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
const renderTabBar = props => (<ScrollableTabBar {...props} style={{ borderBottomColor: '#f6b02c' }} />)

export default class Root extends Component {
  render () {
    const items = this.props.category.items
    const order = this.props.order.items
    let tabs = []

    Object.keys(order).forEach((key, index) => {
      if (key === 'fav') {
        tabs.push(
          <Container tabLabel={items[key].name} key={('catTab' + index)}>
            <FavItems data={items[key]} index={key} key={key} />
          </Container>
        )
      } else if (key === 'myBookmark') {
        tabs.push(
          <Container tabLabel={items[key].name} key={('catTab' + index)}>
            <MyBookmark data={items[key]} index={key} key={key} />
          </Container>
        )
      } else {
        tabs.push(
          <Container tabLabel={items[key].name} key={('catTab' + index)}>
            <NewEntryItems data={items[key]} index={key} key={key} />
          </Container>
        )
      }
    })

    return (
      <ScrollableTabView
        style={styles.tabs}
        tabBarUnderlineStyle={styles.tab}
        tabBarActiveTextColor="#f6b02c"
        tabBarInactiveTextColor="#b9b9b9"
        renderTabBar={renderTabBar}
      >
        {tabs}
        <Container tabLabel="設定">
          <Setting />
        </Container>
      </ScrollableTabView>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    marginTop: 20,
    backgroundColor: '#fff',
  },
  tab: {
    height: 2,
    backgroundColor: '#f6b02c',
  }
})
