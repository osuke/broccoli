import { FETCH_ARTICLES, FETCH_FAV_ARTICLES } from '../actions/fetchArticles'

const initialState = {
  items: [
    {
      name: '世の中',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20hatena%3Abookmarkcount%20from%20rss%20where%20url%3D%27http%3A%2F%2Fb.hatena.ne.jp%2Fhotentry%2Fsocial.rss%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      items: []
    },
    {
      name: '政治と経済',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20hatena%3Abookmarkcount%20from%20rss%20where%20url%3D%27http%3A%2F%2Fb.hatena.ne.jp%2Fhotentry%2Feconomics.rss%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      items: []
    },
    {
      name: '暮らし',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20hatena%3Abookmarkcount%20from%20rss%20where%20url%3D%27http%3A%2F%2Fb.hatena.ne.jp%2Fhotentry%2Flife.rss%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      items: []
    },
    {
      name: '学び',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20hatena%3Abookmarkcount%20from%20rss%20where%20url%3D%27http%3A%2F%2Fb.hatena.ne.jp%2Fhotentry%2Fknowledge.rss%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      items: []
    },
    {
      name: 'テクノロジー',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20hatena%3Abookmarkcount%20from%20%20rss%20where%20url%3D%27http%3A%2F%2Fb.hatena.ne.jp%2Fhotentry%2Fit.rss%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      items: []
    },
    {
      name: 'エンタメ',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20hatena%3Abookmarkcount%20from%20rss%20where%20url%3D%27http%3A%2F%2Fb.hatena.ne.jp%2Fhotentry%2Fentertainment.rss%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      items: []
    },
    {
      name: 'アニメとゲーム',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20hatena%3Abookmarkcount%20from%20rss%20where%20url%3D%27http%3A%2F%2Fb.hatena.ne.jp%2Fhotentry%2Fgame.rss%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      items: []
    },
    {
      name: 'おもしろ',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20link%2C%20hatena%3Abookmarkcount%20from%20rss%20where%20url%3D%27http%3A%2F%2Fb.hatena.ne.jp%2Fhotentry%2Ffun.rss%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
      items: []
    },
    {
      name: 'お気に入り',
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2C%20description%2C%20link%2C%20dc%3Acreator%2C%20hatena%3Abookmarkcount%20from%20rss%20where%20url%3D%27',
      items: [],
      offset: 0
    }
  ]
}

export default (state = initialState, action) => {
  let newState = state

  switch (action.type) {
    case FETCH_ARTICLES:
      newState.items[action.payload.index].items.push(...action.payload.item.query.results.item)
      return Object.assign({}, state, newState)
    case FETCH_FAV_ARTICLES:
      newState.items[action.payload.index].items.push(...action.payload.item.query.results.item)
      newState.items[action.payload.index].offset = action.payload.offset
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
