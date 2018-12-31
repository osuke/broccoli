import { ActionType, getType } from 'typesafe-actions'
import {
  actions,
} from '../actions/fetchArticles'

type Actions = ActionType<typeof actions>

export interface IBookmarkItem {
  title: string
  link: string
  bookmarkcount: number
  favicon: string
  domain: string
}

export interface IMybookmarkState {
  type: 'LATEST' | 'SEARCH_RESULT'
  items: {
    latest: IBookmarkItem[]
    searchResult: IBookmarkItem[]
  }
  keyword: string
  offset: number
  total: number
}

const initialState: IMybookmarkState = {
  type: 'LATEST',
  items: {
    latest: [],
    searchResult: [],
  },
  keyword: '',
  offset: 0,
  total: 20,
}

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case getType(actions.fetchBookmarkArticles):
      action.payload.items.map(item => {
        const domain = item.link.split('/')[2]
        item.domain = domain
        item.favicon = `https://www.google.com/s2/favicons?domain=${domain}`
      })

      return Object.assign({}, state,
        {
          type: 'LATEST',
          items: {
            latest: action.payload.items,
            searchResult: state.items.searchResult,
            keyword: '',
            offset: 0,
            total: 20,
          },
        }
      )

    case getType(actions.fetchSearchResult):
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
          total: action.payload.total,
        }
      )

    case getType(actions.fetchBookmarkCache):
      return Object.assign({}, state,
        {
          type: 'LATEST',
        }
      )

    default:
      return state
  }
}
