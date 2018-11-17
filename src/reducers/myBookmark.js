import {
  FETCH_BOOKMARK_ARTICLES,
  FETCH_SEARCH_RESULT,
} from '../actions/fetchArticles'

const initialState = {
  type: 'LATEST',
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKMARK_ARTICLES:
      action.payload.items.map(item => {
        const domain = item.link.split('/')[2]
        item.domain = domain
        item.favicon = `https://www.google.com/s2/favicons?domain=${domain}`
      })

      //newState.items[action.payload.index].items = [...action.payload.item]
      //// after refresh
      //if (action.payload.offset === 20) {
      //  newState.items[action.payload.index].items = [...action.payload.item]

      //// after reaching end
      //} else {
      //  newState.items[action.payload.index].items = [...newState.items[action.payload.index].items, ...action.payload.item]
      //}
      //newState.items[action.payload.index].offset = action.payload.offset
      return Object.assign({}, state,
        {
          type: 'LATEST',
          items: action.payload.items,
        }
      )

    case FETCH_SEARCH_RESULT:
      console.log(action.payload.items)
      return Object.assign({}, state,
        {
          type: 'SEARCH_RESULT',
          items: action.payload.items,
        }
      )
    default:
      return state
  }
}
