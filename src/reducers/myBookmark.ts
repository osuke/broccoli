import { ActionType, getType } from 'typesafe-actions'
import {
  myBookmarkActions as actions,
} from '../actions/fetchArticles'

type Actions = ActionType<typeof actions>

export interface IBookmarkItem {
  title: string
  link: string
  bookmarkcount: number
  favicon: string
  domain: string
}

type AccessStatus = 'success' | 'fail' | 'loading'

export interface IMybookmarkState {
  type: 'LATEST' | 'SEARCH_RESULT'
  items: {
    latest: IBookmarkItem[]
    searchResult: IBookmarkItem[]
  }
  keyword: string
  offset: number
  total: number
  status: AccessStatus
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
  status: 'loading',
}

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case getType(actions.fetchMyBookamrk.request):
      return Object.assign({}, state,
        {
          status: 'loading',
        }
      )

    case getType(actions.fetchMyBookamrk.success):
      action.payload.map(item => {
        const domain = item.link.split('/')[2]
        item.domain = domain
        item.favicon = `https://www.google.com/s2/favicons?domain=${domain}`
      })

      return Object.assign({}, state,
        {
          type: 'LATEST',
          status: 'success',
          items: {
            latest: [...action.payload],
            searchResult: [...state.items.searchResult],
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

    case getType(actions.fetchMyBookamrk.failure):
      return Object.assign({}, state,
        {
          status: 'fail',
        }
      )

    default:
      return state
  }
}
