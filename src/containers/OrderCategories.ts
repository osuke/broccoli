import { connect, } from 'react-redux'
import { Dispatch,  } from 'redux'
import OrderCategories from '../components/OrderCategories'
import { updateOrder, } from '../actions/order'
import { IAppState, } from '../reducers/app'
import { IOrderState, } from '../reducers/order'

export type IStateToProps = IOrderState

const mapStateToProps = (state: IAppState): IStateToProps => {
  return state.order
}

export interface IDispatchToProps {
  updateOrder: (order: string[]) => void
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchToProps  => {
  return {
    updateOrder: order => { dispatch(updateOrder(order)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderCategories)