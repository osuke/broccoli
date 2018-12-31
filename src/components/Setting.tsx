import * as React from 'react'
import {
  StyleSheet,
} from 'react-native'
import {
  Button,
  Container,
  Content,
  List,
  ListItem,
  Text,
  Body,
  Right,
  Left,
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import {
  TEXT_COLOR_PRIMARY,
  BORDER_WIDTH_PRIMARY,
  BORDER_COLOR_PRIMARY,
  BACKGROUND_COLOR_GRAY,
} from '../constants/styles'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import Icon from './Icon'

interface IProps {
  isLogin: boolean
  logout: () => void
}

const Setting: React.SFC<IProps> = ({ isLogin, logout }) => (
  <Container>
    <StyledHeader>
      <Left>
        <Button
          transparent
          onPress={Actions.pop}
        >
          <Icon
            name="close"
          />
        </Button>
      </Left>
      <Body>
        <StyledTitle>設定</StyledTitle>
      </Body>
      <Right />
    </StyledHeader>
    <Content style={styles.content as any}>
      <List style={styles.list}>
        <ListItem
          onPress={Actions.order}
          style={styles.listItem}
          icon>
          <Body
            style={styles.listItemOrderBody as any}
          >
            <Text style={styles.text}>カテゴリを並び替える</Text>
          </Body>
          <Right
            style={{ paddingRight: 0 }}
          >
            <Icon
              name="chevron-right"
            />
          </Right>
        </ListItem>
      </List>
      {isLogin ? (
        <List style={styles.list}>
          <ListItem
            onPress={logout}
            style={styles.listItem}
            icon
          >
            <Body>
              <Text style={styles.logoutText}>ログアウト</Text>
            </Body>
          </ListItem>
        </List>
      ) : (
        null
      )}
    </Content>
  </Container>
)

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  content: {
    backgroundColor: BACKGROUND_COLOR_GRAY,
    paddingTop: 20,
  },
  list: {
    borderTopWidth: BORDER_WIDTH_PRIMARY,
    borderTopColor: BORDER_COLOR_PRIMARY,
    marginBottom: 16,
  },
  listItem: {
    backgroundColor: '#fff',
    marginLeft: 0,
  },
  listItemOrderBody: {
    paddingLeft: 16,
  },
  text: {
    color: TEXT_COLOR_PRIMARY,
  },
  logoutText: {
    color: TEXT_COLOR_PRIMARY,
    textAlign: 'center',
  },
})

export default Setting
