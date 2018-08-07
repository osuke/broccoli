import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import {
  Container, 
  Left,
  Body,
  Right,
  Tabs,
  Tab,
  ScrollableTab,
  Button,
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_SECONDARY,
  BACKGROUND_COLOR_GRAY,
  TAB_COLOR_PRIMARY,
} from '../constants/styles.js'
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
            <Container style={styles.tabContent} key={('catTab' + index)}>
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
            <Container style={styles.tabContent}>
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
            <Container style={styles.tabContent}>
              <NewEntryItems data={items[key]} index={key} key={key} />
            </Container>
          </Tab>
        )
      }
    })

    return (
      <Container style={styles.container}>
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
  container: {
    backgroundColor: BACKGROUND_COLOR_GRAY,
  },
  tabs: {
    height: 40,
    borderBottomColor: BORDER_COLOR_SECONDARY,
    borderBottomWidth: BORDER_WIDTH_PRIMARY,
  },
  tab: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff',
  },
  tabContent: {
    backgroundColor: BACKGROUND_COLOR_GRAY,
  },
  underline: {
    backgroundColor: TAB_COLOR_PRIMARY,
    height: 3,
  },
  tabText: {
    color: TAB_COLOR_PRIMARY,
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