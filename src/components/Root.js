import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Container, 
  Left,
  Body,
  Right,
  Text,
  Tabs,
  Tab,
  ScrollableTab,
  Button,
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import NewEntryItems from '../containers/NewEntryItems'
import FavItems from '../containers/FavItems'
import MyBookmark from '../containers/MyBookmark'
import Icon from './Icon'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'

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
        <StyledHeader>
          <Left />
          <Body>
            <StyledTitle>ホーム</StyledTitle>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => {
                Actions.setting()
              }}
            >
              <Icon
                name="ios-settings"
                style={styles.settingIcon}
              />
            </Button>
          </Right>
        </StyledHeader>
        <Tabs
          renderTabBar={()=> <ScrollableTab style={styles.tabs} />}
          tabBarUnderlineStyle={styles.underline}
        >
          {tabs}
        </Tabs>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  tabs: {
    height: 40,
    borderBottomColor: '#d1d1d1',
    borderBottomWidth: 1,
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
  settingIcon: {
    color: '#858585'
  },
})

Root.propTypes = {
  category: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired,
}
