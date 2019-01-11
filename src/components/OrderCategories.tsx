import * as React from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Left,
  Body,
  Right,
  Button,
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import Icon from './Icon'
import SortableListView from 'react-native-sortable-listview'
import OrderCategoryItem from './OrderCategoryItem'
import StyledHeader from './StyledHeader'
import StyledTitle from './StyledTitle'
import { IStateToProps, IDispatchToProps, } from '../containers/OrderCategories'

type IProps = IStateToProps & IDispatchToProps

interface IOnRowMoved {
  from: number
  row: {
    data: {
      name: string
    }
    index: string
    section: string
  }
  to: number
}

const OrderCategories: React.SFC<IProps> = ({ items, updateOrder }) => {
  let order = Object.keys(items)

  return (
    <Container>
      <StyledHeader>
        <Left>
          <Button
            transparent
            onPress={Actions.pop}
          >
            <Icon
              name="chevron-left"
            />
          </Button>
        </Left>
        <Body>
          <StyledTitle>並び替え</StyledTitle>
        </Body>
        <Right />
      </StyledHeader>
      <SortableListView
        style={styles.list}
        data={items}
        order={order}
        onRowMoved={(e: IOnRowMoved) => {
          order.splice(e.to, 0, order.splice(e.from, 1)[0])
          updateOrder(order)
        }}
        renderRow={(row: {name: string}) => {
          return <OrderCategoryItem data={row}/>
        }}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  list: {
    display: 'flex'
  }
})

export default OrderCategories
