import React from 'react'
import { connect } from 'react-redux'
import OrderCategories from '../components/OrderCategories'
import { updateOrder } from '../actions/order'

const mapStateToProps = (state) => {
  return state.order
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateOrder: (order) => { dispatch(updateOrder(order)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCategories)
