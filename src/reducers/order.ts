import { ActionType, getType, } from 'typesafe-actions'
import { actions } from '../actions/order'

type Actions = ActionType<typeof actions>

export interface IItem {
  name: string
}

export interface IOrderState {
  items: {
    hotentry: IItem,
    general: IItem
    social: IItem
    economics: IItem
    life: IItem
    knowledge: IItem
    it: IItem
    fun: IItem
    entertainment: IItem
    game: IItem
    myBookmark: IItem
    [key: string]: IItem
  } | {
    [key: string]: IItem
  }
}

const initialState: IOrderState = {
  items: {
    hotentry: {
      name: '総合'
    },
    general: {
      name: '一般'
    },
    social: {
      name: '世の中'
    },
    economics: {
      name: '政治と経済'
    },
    life: {
      name: '暮らし'
    },
    knowledge: {
      name: '学び'
    },
    it: {
      name: 'テクノロジー'
    },
    fun: {
      name: 'おもしろ'
    },
    entertainment: {
      name: 'エンタメ'
    },
    game: {
      name: 'アニメとゲーム'
    },
    myBookmark: {
      name: 'マイブックマーク'
    },
  }
}

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case getType(actions.updateOrder):
      let newState: IOrderState = { items: {} }

      action.payload.order.map(val => {
        newState.items[val] = state.items[val]
      })
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
