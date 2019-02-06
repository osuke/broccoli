import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  Text,
  ListItem,
  Body,
  Right
} from 'native-base'
import { TITLE_COLOR_PRIMARY } from '../constants/styles'
import Icon from './Icon'

interface IProps {
  sortHandlers?: {
    onLongPress: () => void
    onPressOut: () => void
  }
  data: {
    name: string
  }
}

const OrderCategoryItem: React.SFC<IProps> = ({ sortHandlers, data }) => {
  return (
    <ListItem
      style={styles.listItem}
      {...sortHandlers}>
      <Body>
        <Text style={styles.text}>{data.name}</Text>
      </Body>
      <Right>
        <Icon
          name="menu"
        />
      </Right>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  listItem: {
    height: 52,
    backgroundColor: 'transparent',
  },
  text: {
    color: TITLE_COLOR_PRIMARY,
    fontWeight: 'bold',
  },
})

export default OrderCategoryItem