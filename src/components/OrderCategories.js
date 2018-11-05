import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

export default class OrderCategories extends Component {
  render () {
    let order = Object.keys(this.props.items)

    return (
      <Container>
        <StyledHeader>
          <Left>
            <Button
              transparent
              onPress={() => {
                Actions.pop()
              }}
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
          data={this.props.items}
          order={order}
          onRowMoved={e => {
            order.splice(e.to, 0, order.splice(e.from, 1)[0])
            this.props.updateOrder(order)
            this.forceUpdate.bind(this)
          }}
          renderRow={row => (
            <OrderCategoryItem data={row}/>
          )}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    display: 'flex'
  }
})

OrderCategories.propTypes = {
  items: PropTypes.object.isRequired,
  updateOrder: PropTypes.func.isRequired
}
