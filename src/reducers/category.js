import {
  FETCH_ARTICLES,
  FETCH_FAV_ARTICLES,
  FETCH_BOOKMARK_ARTICLES,
  CLEAR_ARTICLES
} from '../actions/fetchArticles'

const initialState = {
  items: {
    hotentry: {
      name: '総合',
      url: 'http://b.hatena.ne.jp/hotentry.rss',
      items: []
    },
    general: {
      name: '一般',
      url: 'http://b.hatena.ne.jp/hotentry/general.rss',
      items: []
    },
    social: {
      name: '世の中',
      url: 'http://b.hatena.ne.jp/hotentry/social.rss',
      items: []
    },
    economics: {
      name: '政治と経済',
      url: 'http://b.hatena.ne.jp/hotentry/economics.rss',
      items: []
    },
    life: {
      name: '暮らし',
      url: 'http://b.hatena.ne.jp/hotentry/life.rss',
      items: []
    },
    knowledge: {
      name: '学び',
      url: 'http://b.hatena.ne.jp/hotentry/knowledge.rss',
      items: []
    },
    it: {
      name: 'テクノロジー',
      url: 'http://b.hatena.ne.jp/hotentry/it.rss',
      items: []
    },
    fun: {
      name: 'おもしろ',
      url: 'http://b.hatena.ne.jp/hotentry/fun.rss',
      items: []
    },
    entertainment: {
      name: 'エンタメ',
      url: 'http://b.hatena.ne.jp/hotentry/entertainment.rss',
      items: []
    },
    game: {
      name: 'アニメとゲーム',
      url: 'http://b.hatena.ne.jp/hotentry/game.rss',
      items: []
    },
    myBookmark: {
      name: 'マイブックマーク',
      items: [],
      offset: 0
    },
    fav: {
      name: 'お気に入り',
      items: [],
      offset: 0
    },
  }
/*
  items: [
    {
      name: '総合',
      url: 'http://b.hatena.ne.jp/hotentry.rss',
      items: []
    },
    {
      name: '一般',
      url: 'http://b.hatena.ne.jp/hotentry/general.rss',
      items: []
    },
    {
      name: '世の中',
      url: 'http://b.hatena.ne.jp/hotentry/social.rss',
      items: []
    },
    {
      name: '政治と経済',
      url: 'http://b.hatena.ne.jp/hotentry/economics.rss',
      items: []
    },
    {
      name: '暮らし',
      url: 'http://b.hatena.ne.jp/hotentry/life.rss',
      items: []
    },
    {
      name: '学び',
      url: 'http://b.hatena.ne.jp/hotentry/knowledge.rss',
      items: []
    },
    {
      name: 'テクノロジー',
      url: 'http://b.hatena.ne.jp/hotentry/it.rss',
      items: []
    },
    {
      name: 'おもしろ',
      url: 'http://b.hatena.ne.jp/hotentry/fun.rss',
      items: []
    },
    {
      name: 'エンタメ',
      url: 'http://b.hatena.ne.jp/hotentry/entertainment.rss',
      items: []
    },
    {
      name: 'アニメとゲーム',
      url: 'http://b.hatena.ne.jp/hotentry/game.rss',
      items: []
    },
    {
      name: 'マイブックマーク',
      items: [],
      offset: 0
    },
    {
      name: 'お気に入り',
      items: [],
      offset: 0
    }
  ]
*/
}

export default (state = initialState, action) => {
  let newState = state

  switch (action.type) {
    case FETCH_ARTICLES:
      newState.items[action.payload.index].items.push(...action.payload.item)

      return Object.assign({}, state, newState)
    case CLEAR_ARTICLES:
      newState.items[action.payload.index].items = []

      return Object.assign({}, state, newState)
    case FETCH_FAV_ARTICLES:
      newState.items[action.payload.index].items.push(...action.payload.item)
      newState.items[action.payload.index].offset = action.payload.offset

      return Object.assign({}, state, newState)
    case FETCH_BOOKMARK_ARTICLES:
      newState.items[action.payload.index].items.push(...action.payload.item)
      newState.items[action.payload.index].offset = action.payload.offset

      return Object.assign({}, state, newState)
    default:
      return state
  }
}
