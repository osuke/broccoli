import { Action } from 'redux'
export const UPDATE_ORDER = 'UPDATE_ORDER'

interface IUpdateOrder extends Action {
  payload: {
    order: string[]
  }
}

export const updateOrder = (order: string[]): IUpdateOrder => (
  {
    type: UPDATE_ORDER,
    payload: {
      order: order
    },
  }
)
