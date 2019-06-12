import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Tabs,
  Tab,
  ScrollableTab,
  Button
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_SECONDARY,
  BACKGROUND_COLOR_GRAY,
  TAB_COLOR_PRIMARY
} from '../constants/styles'
import NewEntryItems from '../containers/NewEntryItems'
import MyBookmark from '../containers/MyBookmark'
import Icon from './Icon'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import { IStateToProps } from '../containers/Root'

type IProps = IStateToProps

const Root: React.SFC<IProps> = ({ category, order }) => {
  const items = category.items
  let tabs: React.ReactNode[] = []

  Object.keys(order.items).forEach((key, index) => {
    if (key === 'myBookmark') {
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
            <MyBookmark />
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
            <NewEntryItems index={key} url={items[key].url} key={key} />
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
              name="settings"
            />
          </Button>
        </Right>
      </StyledHeader>
      <Tabs
        renderTabBar={() => <ScrollableTab style={styles.tabs} />}
        tabBarUnderlineStyle={styles.underline}
        prerenderingSiblingsNumber={Infinity}
      >
        {tabs}
      </Tabs>
    </Container>
  )
}

export default Root

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR_GRAY
  },
  tabs: {
    height: 40,
    borderBottomColor: BORDER_COLOR_SECONDARY,
    borderBottomWidth: BORDER_WIDTH_PRIMARY
  },
  tab: {
    backgroundColor: '#fff',
    borderBottomColor: '#fff'
  },
  tabContent: {
    backgroundColor: BACKGROUND_COLOR_GRAY
  },
  underline: {
    backgroundColor: TAB_COLOR_PRIMARY,
    height: 3
  },
  tabText: {
    color: TAB_COLOR_PRIMARY,
    fontSize: 14
  },
  settingIcon: {
    color: '#858585'
  }
})
