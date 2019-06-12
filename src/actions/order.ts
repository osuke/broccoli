import { createAction } from 'typesafe-actions'
import { ORDER_UPDATE } from '../constants/actionTypes'

export const updateOrder = createAction(
  ORDER_UPDATE,
  resolve => (order: string[]) => resolve({ order })
)

export const actions = { updateOrder }
