export const UPDATE_ORDER = 'UPDATE_ORDER'

export const updateOrder = (order) => (
  {
    type: UPDATE_ORDER,
    payload: {
      order: order
    }
  }
)
