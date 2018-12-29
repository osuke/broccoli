import { createAction } from 'typesafe-actions'

export const UPDATE_ORDER = 'UPDATE_ORDER'

export const updateOrder = createAction(
  UPDATE_ORDER, 
  resolve => (order: string[]) => resolve({ order, }),
)

export const actions = { updateOrder, }
