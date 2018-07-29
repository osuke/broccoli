import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Container, 
  Header,
  Left,
  Body,
  Right,
  Title,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
} from 'native-base'
import NewEntryItems from '../containers/NewEntryItems'
import FavItems from '../containers/FavItems'
import MyBookmark from '../containers/MyBookmark'
import Setting from '../containers/Setting'

export default class Root extends Component {
  render () {
    const items = this.props.category.items
    const order = this.props.order.items
    let tabs = []

    Object.keys(order).forEach((key, index) => {
      if (key === 'fav') {
        tabs.push(
          <Tab
            heading={items[key].name}
            key={`catTab-${index}`}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
          >
            <Container key={('catTab' + index)}>
              <FavItems data={items[key]} index={key} key={key} />
            </Container>
          </Tab>
        )
      } else if (key === 'myBookmark') {
        tabs.push(
          <Tab
            heading={items[key].name}
            key={`catTab-${index}`}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
          >
            <Container>
              <MyBookmark data={items[key]} index={key} key={key} />
            </Container>
          </Tab>
        )
      } else {
        tabs.push(
          <Tab
            heading={items[key].name}
            key={`catTab-${index}`}
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
          >
            <Container>
              <NewEntryItems data={items[key]} index={key} key={key} />
            </Container>
          </Tab>
        )
      }
    })

    return (
      <Container>
        <Header style={styles.header}>
          <Left></Left>
          <Body>
            <Title>ホーム</Title>
          </Body>
          <Right></Right>
        </Header>
        <Tabs
          renderTabBar={()=> <ScrollableTab style={styles.tabs} />}
          tabBarUnderlineStyle={styles.underline}
        >
          {tabs}
          <Tab
            heading="設定"
            textStyle={styles.tabText}
            activeTextStyle={styles.tabText}
            tabStyle={styles.tab}
            activeTabStyle={styles.tab}
          >
            <Container>
              <Setting />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    borderBottomColor: '#d1d1d1',
  },
  tabs: {
    height: 40,
    borderBottomColor: '#d1d1d1',
  },
  tab: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
  },
  underline: {
    backgroundColor: '#3dc264',
    height: 3,
  },
  tabText: {
    color: '#3dc264',
    fontSize: 14,
  },
})

Root.propTypes = {
  category: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
}
