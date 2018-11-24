import { parseString } from 'react-native-xml2js'
import HatenaLogin from '../utils/login'
export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const FETCH_FAV_ARTICLES = 'FETCH_FAV_ARTICLES'
export const FETCH_BOOKMARK_ARTICLES = 'FETCH_BOOKMARK_ARTICLES'
export const FETCH_BOOKMARK_CACHE = 'FETCH_BOOKMARK_CACHE'
export const CLEAR_ARTICLES = 'CLEAR_ARTICLES'
export const FETCH_FAILED = 'FETCH_FAILED'
export const FETCH_BOOKMARK_FAILED = 'FETCH_BOOKMARK_FAILED'
export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT'

const hatenaLogin = new HatenaLogin()

export const fetchArticles = (item, index) => (
  {
    type: FETCH_ARTICLES,
    payload: {
      item: item,
      index: index
    }
  }
)

export const clearArticles = index => (
  {
    type: CLEAR_ARTICLES,
    payload: {
      index: index
    }
  }
)

export const fetchBookmarkArticles = (items) => (
  {
    type: FETCH_BOOKMARK_ARTICLES,
    payload: {
      items,
    }
  }
)

export const fetchBookmarkCache = () => (
  {
    type: FETCH_BOOKMARK_CACHE,
  }
)

export const fetchSearchResult = payload => (
  {
    type: FETCH_SEARCH_RESULT,
    payload,
  }
)

export const fetchFailed = index => (
  {
    type: FETCH_FAILED,
    payload: {
      index: index
    }
  }
)

export const fetchBookmarkFailed = index => (
  {
    type: FETCH_BOOKMARK_FAILED,
    payload: {
      index: index
    }
  }
)

export const getArticlesFromApi = (url, index) => (
  dispatch => (
    new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('timeout'))
      }, 10000)
      fetch(url)
        .then(res => res)
        .then(res => {
          parseString(res._bodyInit, (err, result) => {
            let items = result['rdf:RDF'].item

            items.map((data, index) => {
              items[index].link = data.link[0]
              items[index].title = data.title[0]
              items[index].bookmarkcount = data['hatena:bookmarkcount'][0]
            })
            dispatch(fetchArticles(items, index))
            resolve('success')
          })
        })
        .catch(error => {
          dispatch(fetchFailed(index))
          reject()
        })
      })
  )
)

export const getBookmarkArticlesFromApi = userData => (
  dispatch => (
    new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('timeout'))
      }, 10000)

      fetch(`http://b.hatena.ne.jp/${userData.displayName}/rss?d=${Date.now()}`)
        .then(res => {
          parseString(res._bodyInit, (err, result) => {
            let items = result['rdf:RDF'].item

            items.map((data, index) => {
              items[index].link = data.link[0]
              items[index].title = data.title[0]
              items[index].bookmarkcount = data['hatena:bookmarkcount'][0]
            })
            dispatch(fetchBookmarkArticles(items))
            resolve('success')
          })
        })
        .catch(error => {
          dispatch(fetchBookmarkFailed(index))
          reject()
        })
      })
  )
)

export const getSearchResultFromApi = (keyword, userData, offset) => (
  dispatch => (
    new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('timeout'))
      }, 10000)
      fetch(`https://b.hatena.ne.jp/${userData.displayName}/search/json?q=${keyword}&of=${offset}`)
        .then(res => res.json())
        .then(res => {
          let items = res.bookmarks || []
          console.log(res)
          if (items.length > 0) {
            items.map((item, index) => {
              items[index].link = item.entry.url
              items[index].title = item.entry.title
              items[index].bookmarkcount = item.entry.count
            })
          }

          const payload = {
            items,
            keyword,
            offset,
          }

          dispatch(fetchSearchResult(payload))
          resolve('success')
        })
        .catch(error => {
          //dispatch(fetchFailed(index))
          reject()
        })
      })
  )
)

export const getMyBookmark = (userData) => (
  dispatch => {
    hatenaLogin.sendRequest(
      'GET',
      'http://api.b.hatena.ne.jp/1/my/bookmark',
      userData.userData.token,
      userData.userData.secret,
    ).then(data => {
      console.log(data)
    })
  }
)
