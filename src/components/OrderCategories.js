import React from 'react'
import { StyleSheet } from 'react-native'
import SortableListView from 'react-native-sortable-listview'
import OrderCategoryItem from './OrderCategoryItem'

export default class OrderCategories extends React.Component {
  render () {
    let items = this.props.items
    let order = Object.keys(this.props.items)

    return (
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
    )
  }
}
