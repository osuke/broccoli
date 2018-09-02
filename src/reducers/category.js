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
  }
}

export default (state = initialState, action) => {
  let newState = state

  switch (action.type) {
    case FETCH_ARTICLES:
      action.payload.item.map(obj => {
        const domain = obj.link.split('/')[2]
        obj.domain = domain
        obj.favicon = `https://www.google.com/s2/favicons?domain=${domain}`
      })
      newState.items[action.payload.index].items = [...action.payload.item]
      return Object.assign({}, state, newState)
    case CLEAR_ARTICLES:
      if (typeof newState.items[action.payload.index].offset === 'number') {
        newState.items[action.payload.index].offset = 0
      }
      return Object.assign({}, state, newState)
    case FETCH_FAV_ARTICLES:

      // after refresh
      if (action.payload.offset === 25) {
        newState.items[action.payload.index].items = [...action.payload.item]

      // after reaching end
      } else {
        newState.items[action.payload.index].items = [...newState.items[action.payload.index].items, ...action.payload.item]
      }
      newState.items[action.payload.index].offset = action.payload.offset
      return Object.assign({}, state, newState)
    case FETCH_BOOKMARK_ARTICLES:
      action.payload.item.map(obj => {
        const domain = obj.link.split('/')[2]
        obj.domain = domain
        obj.favicon = `https://www.google.com/s2/favicons?domain=${domain}`
      })

      // after refresh
      if (action.payload.offset === 20) {
        newState.items[action.payload.index].items = [...action.payload.item]

      // after reaching end
      } else {
        newState.items[action.payload.index].items = [...newState.items[action.payload.index].items, ...action.payload.item]
      }
      newState.items[action.payload.index].offset = action.payload.offset
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
