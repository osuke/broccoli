import {
  FETCH_BOOKMARK_ARTICLES,
  FETCH_SEARCH_RESULT,
  FETCH_BOOKMARK_CACHE,
} from '../actions/fetchArticles'

const initialState = {
  type: 'LATEST',
  items: {
    latest: [],
    searchResult: [],
  },
  keyword: '',
  offset: 0,
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
          items: {
            latest: action.payload.items,
            searchResult: state.items.searchResult,
            keyword: '',
            offset: 0,
          },
        }
      )

    case FETCH_SEARCH_RESULT:
      let items = action.payload.offset === 0 ? [] : state.items.searchResult

      return Object.assign({}, state,
        {
          type: 'SEARCH_RESULT',
          items: {
            latest: state.items.latest,
            searchResult: [...items, ...action.payload.items]
          },
          keyword: action.payload.keyword,
          offset: action.payload.offset,
        }
      )

    case FETCH_BOOKMARK_CACHE:
      return Object.assign({}, state,
        {
          type: 'LATEST',
        }
      )

    default:
      return state
  }
}
