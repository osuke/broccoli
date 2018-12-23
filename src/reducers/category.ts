import {
  FETCH_ARTICLES,
  FETCH_FAILED,
  FETCH_BOOKMARK_FAILED,
  IFetchArticles,
} from '../actions/fetchArticles'

interface ICategory {
  name: string
  url: string
  items: any[]
  status: string
}

interface IMyBookmark {
  name: string
  items: any[]
  status: string
  offset: number
}

interface ICategoryState {
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

type ActionTypes = IFetchArticles

const initialState: ICategoryState = {
  items: {
    hotentry: {
      name: '総合',
      url: 'http://b.hatena.ne.jp/hotentry.rss',
      items: [],
      status: 'success',
    },
    general: {
      name: '一般',
      url: 'http://b.hatena.ne.jp/hotentry/general.rss',
      items: [],
      status: 'success',
    },
    social: {
      name: '世の中',
      url: 'http://b.hatena.ne.jp/hotentry/social.rss',
      items: [],
      status: 'success',
    },
    economics: {
      name: '政治と経済',
      url: 'http://b.hatena.ne.jp/hotentry/economics.rss',
      items: [],
      status: 'success',
    },
    life: {
      name: '暮らし',
      url: 'http://b.hatena.ne.jp/hotentry/life.rss',
      items: [],
      status: 'success',
    },
    knowledge: {
      name: '学び',
      url: 'http://b.hatena.ne.jp/hotentry/knowledge.rss',
      items: [],
      status: 'success',
    },
    it: {
      name: 'テクノロジー',
      url: 'http://b.hatena.ne.jp/hotentry/it.rss',
      items: [],
      status: 'success',
    },
    fun: {
      name: 'おもしろ',
      url: 'http://b.hatena.ne.jp/hotentry/fun.rss',
      items: [],
      status: 'success',
    },
    entertainment: {
      name: 'エンタメ',
      url: 'http://b.hatena.ne.jp/hotentry/entertainment.rss',
      items: [],
      status: 'success',
    },
    game: {
      name: 'アニメとゲーム',
      url: 'http://b.hatena.ne.jp/hotentry/game.rss',
      items: [],
      status: 'success',
    },
    myBookmark: {
      name: 'マイブックマーク',
      items: [],
      status: 'success',
      offset: 0
    },
  }
}

export default (state = initialState, action: ActionTypes) => {
  let newState = state

  switch (action.type) {
    case FETCH_ARTICLES:
      action.payload.items.map(obj => {
        const domain = obj.link.split('/')[2]
        obj.domain = domain
        obj.favicon = `https://www.google.com/s2/favicons?domain=${domain}`
      })
      newState.items[action.payload.index].items = [...action.payload.items]
      newState.items[action.payload.index].status = 'success'
      return Object.assign({}, state, newState)

    case FETCH_FAILED:
      newState.items[action.payload.index].status = 'failed'
      newState.items[action.payload.index].items = []
      return Object.assign({}, state, newState)

    case FETCH_BOOKMARK_FAILED:
      return state

    default:
      return state
  }
}
