import { ActionType, getType } from 'typesafe-actions'
import {
  actions,
} from '../actions/fetchArticles'

type Actions = ActionType<typeof actions>

type AccessStatus = 'success' | 'fail' | 'loading'

export interface ICategoryItem {
  title: string
  link: string
  bookmarkcount: number
  favicon: string
  domain: string
}

export interface ICategory {
  name: string
  url: string
  items: ICategoryItem[]
  status: AccessStatus
}

interface IMyBookmark {
  name: string
  items: any[]
  status: AccessStatus
  offset: number
}

export interface ICategoryState {
  items: {
    [key: string]: ICategory | IMyBookmark
    hotentry: ICategory
    general: ICategory
    social: ICategory
    economics: ICategory
    life: ICategory
    knowledge: ICategory
    it: ICategory
    fun: ICategory
    entertainment: ICategory
    game: ICategory
    myBookmark: IMyBookmark
  }
}

const initialState: ICategoryState = {
  items: {
    hotentry: {
      name: '総合',
      url: 'http://b.hatena.ne.jp/hotentry.rss',
      items: [],
      status: 'loading',
    },
    general: {
      name: '一般',
      url: 'http://b.hatena.ne.jp/hotentry/general.rss',
      items: [],
      status: 'loading',
    },
    social: {
      name: '世の中',
      url: 'http://b.hatena.ne.jp/hotentry/social.rss',
      items: [],
      status: 'loading',
    },
    economics: {
      name: '政治と経済',
      url: 'http://b.hatena.ne.jp/hotentry/economics.rss',
      items: [],
      status: 'loading',
    },
    life: {
      name: '暮らし',
      url: 'http://b.hatena.ne.jp/hotentry/life.rss',
      items: [],
      status: 'loading',
    },
    knowledge: {
      name: '学び',
      url: 'http://b.hatena.ne.jp/hotentry/knowledge.rss',
      items: [],
      status: 'loading',
    },
    it: {
      name: 'テクノロジー',
      url: 'http://b.hatena.ne.jp/hotentry/it.rss',
      items: [],
      status: 'loading',
    },
    fun: {
      name: 'おもしろ',
      url: 'http://b.hatena.ne.jp/hotentry/fun.rss',
      items: [],
      status: 'loading',
    },
    entertainment: {
      name: 'エンタメ',
      url: 'http://b.hatena.ne.jp/hotentry/entertainment.rss',
      items: [],
      status: 'loading',
    },
    game: {
      name: 'アニメとゲーム',
      url: 'http://b.hatena.ne.jp/hotentry/game.rss',
      items: [],
      status: 'loading',
    },
    myBookmark: {
      name: 'マイブックマーク',
      items: [],
      status: 'loading',
      offset: 0
    },
  }
}

export default (state = initialState, action: Actions) => {
  let newState = state

  switch (action.type) {
    case getType(actions.fetchHotentry.request):
      newState.items[action.payload.index].status = 'loading'
      return Object.assign({}, state, newState)

    case getType(actions.fetchArticles):
    case getType(actions.fetchHotentry.success):
      action.payload.items.map(obj => {
        const domain = obj.link.split('/')[2]
        obj.domain = domain
        obj.favicon = `https://www.google.com/s2/favicons?domain=${domain}`
      })
      newState.items[action.payload.index].items = [...action.payload.items]
      newState.items[action.payload.index].status = 'success'
      return Object.assign({}, state, newState)

    case getType(actions.fetchFailed):
    case getType(actions.fetchHotentry.failure):
      newState.items[action.payload.index].status = 'fail'
      newState.items[action.payload.index].items = []
      return Object.assign({}, state, newState)

    case getType(actions.fetchBookmarkFailed):
      return state

    default:
      return state
  }
}
