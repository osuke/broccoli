import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon
} from 'native-base'
import { Actions } from 'react-native-router-flux'
import { Feather } from '@expo/vector-icons'
import SortableListView from 'react-native-sortable-listview'
import OrderCategoryItem from './OrderCategoryItem'

export default class OrderCategories extends Component {
  render () {
    let items = this.props.items
    let order = Object.keys(this.props.items)

    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                Actions.pop()
              }}
            >
              <Feather
                name="chevron-left"
                style={styles.headerIcon}
              />
            </Button>
          </Left>
          <Body></Body>
          <Right />
        </Header>
        <SortableListView
          style={{ flex: 1 }}
          data={this.props.items}
          order={order}
          onRowMoved={e => {
            order.splice(e.to, 0, order.splice(e.from, 1)[0])
            this.props.updateOrder(order)
            this.forceUpdate.bind(this)
          }}
          renderRow={(row) => (
            <OrderCategoryItem data={row}/>
          )}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  headerIcon: {
    fontSize: 28
  }
})
