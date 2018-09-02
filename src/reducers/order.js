import { UPDATE_ORDER } from '../actions/order'

const initialState = {
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
    fav: {
      name: 'お気に入り'
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ORDER:
      let newState = { items: {} }
      action.payload.order.map(val => {
        newState.items[val] = state.items[val]
      })
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
