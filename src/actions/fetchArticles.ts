import { createAction } from 'typesafe-actions'
import { parseString } from 'react-native-xml2js'
import { Action, Dispatch } from 'redux'
import HatenaLogin from '../utils/login'
export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const FETCH_BOOKMARK_ARTICLES = 'FETCH_BOOKMARK_ARTICLES'
export const FETCH_BOOKMARK_CACHE = 'FETCH_BOOKMARK_CACHE'
export const FETCH_FAILED = 'FETCH_FAILED'
export const FETCH_BOOKMARK_FAILED = 'FETCH_BOOKMARK_FAILED'
export const FETCH_SEARCH_RESULT = 'FETCH_SEARCH_RESULT'

interface IArticle {
  link: string
  title: string
  bookmarkcount: number
  domain: string
  favicon: string
}

export interface IFetchArticles extends Action {
  payload: {
    items: IArticle[]
    index: string
  }
}

interface IFetchBookmarkArticles extends Action {
  payload: {
    items: IArticle[]
  }
}

interface ISearchResponse {
  items: any[]
  keyword: string
  offset: number
  total: number
}

interface IFetchSearchResult extends Action {
  payload: ISearchResponse
}

export interface IFetchFailed extends Action {
  payload: {
    index: string
  }
}

interface IUserData {
  displayName: string
  secret: string
  token: string
  urlName: string
}

export const fetchArticles = createAction(
  FETCH_ARTICLES,
  resolve => (items: IArticle[] , index: string) => resolve({ items, index }),
)

export const fetchBookmarkArticles = createAction(
  FETCH_BOOKMARK_ARTICLES,
  resolve => (items: IArticle[]) => resolve({ items }),
)

export const fetchBookmarkCache = createAction(
  FETCH_BOOKMARK_CACHE,
  resolve => (items: IArticle[]) => resolve({ items }),
)

export const fetchSearchResult = createAction(
  FETCH_SEARCH_RESULT,
  resolve => (payload: ISearchResponse) => resolve({ ...payload }),
)

export const fetchFailed = createAction(
  FETCH_FAILED,
  resolve => (index: string) => resolve({ index, }),
)

export const fetchBookmarkFailed = createAction(
  FETCH_BOOKMARK_FAILED,
  resolve => (index: string) => resolve({ index, }),
)

export const actions = {
  fetchArticles,
  fetchBookmarkArticles,
  fetchBookmarkCache,
  fetchSearchResult,
  fetchFailed,
  fetchBookmarkFailed,
}

export const getArticlesFromApi = (url: string, indexName: string): (dispatch: Dispatch) => Promise<string> => (
  dispatch => (
    new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('timeout'))
      }, 10000)

      fetch(url)
        .then(((res: any) => {
          parseString(res._bodyInit, (err: any, result: any) => {
            let items = result['rdf:RDF'].item
            items.map((data: any, index: number) => {
              items[index].link = data.link[0]
              items[index].title = data.title[0]
              items[index].bookmarkcount = parseInt(data['hatena:bookmarkcount'][0])
            })
            dispatch(fetchArticles(items, indexName))
            resolve('success')
          })
        } ))
        .catch(error => {
          dispatch(fetchFailed(indexName))
          reject(new Error('error'))
        })
      })
  )
)

export const getBookmarkArticlesFromApi = (userData: IUserData): (dispatch: Dispatch) => Promise<string> => (
  dispatch => (
    new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('timeout'))
      }, 10000)

      fetch(`http://b.hatena.ne.jp/${userData.displayName}/rss?d=${Date.now()}`)
        .then((res: any) => {
          parseString(res._bodyInit, ((err: any, result: any) => {
            console.log('*************')
            console.log(result)
            console.log('*************')
            let items = result['rdf:RDF'].item

            items.map((data: any, index: any) => {
              items[index].link = data.link[0]
              items[index].title = data.title[0]
              items[index].bookmarkcount = parseInt(data['hatena:bookmarkcount'][0])
            })
            dispatch(fetchBookmarkArticles(items))
            resolve('success')
          }))
        })
        .catch(error => {
          //dispatch(fetchBookmarkFailed(index))
          //dispatch(fetchBookmarkFailed(0))
          reject(new Error('error'))
        })
      })
  )
)

export const getSearchResultFromApi = (keyword: string, userData: IUserData, offset: number): (dispatch: Dispatch) => Promise<string> => (
  dispatch => (
    new Promise((resolve, reject) => {
      const emptyPayload = {
        items: [],
        keyword,
        offset,
        total: 0
      }
      dispatch(fetchSearchResult(emptyPayload))

      const timeout = setTimeout(() => {
        reject(new Error('timeout'))
      }, 10000)
      fetch(`https://b.hatena.ne.jp/${userData.displayName}/search/json?q=${keyword}&of=${offset}`)
        .then(res => res.json())
        .then(res => {
          let items = res.bookmarks || []
          console.log('================')
          console.log(items)
          console.log('================')
          if (items.length > 0) {
            items.map((item: any, index: any) => {
              const domain = item.entry.url.split('/')[2]
              items[index].link = item.entry.url
              items[index].title = item.entry.title
              items[index].bookmarkcount = item.entry.count
              items[index].domain = domain
              items[index].favicon = `https://www.google.com/s2/favicons?domain=${domain}`
            })
          }

          const payload: ISearchResponse = {
            items,
            keyword,
            offset,
            total: res.meta.total
          }

          dispatch(fetchSearchResult(payload))
          resolve('success')
        })
        .catch(error => {
          //dispatch(fetchFailed(index))
          reject(new Error('error'))
        })
      })
  )
)
