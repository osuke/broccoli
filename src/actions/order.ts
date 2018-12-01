export const UPDATE_ORDER = 'UPDATE_ORDER'

interface IPayload {
  order: string[]
}

interface IupdateOrder {
  type: string
  payload: IPayload
}

export const updateOrder = (order: IPayload) => (
  {
    type: UPDATE_ORDER,
    payload: {
      order: order
    },
  }
)
