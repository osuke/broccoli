import axios from 'axios'
import { createAction, createAsyncAction, } from 'typesafe-actions'
import { parseString, } from 'react-native-xml2js'
import { ThunkDispatch, } from 'redux-thunk'
import { IAppState, } from '../reducers/app'
import {
  FETCH_BOOKMARK_CACHE,
  FETCH_HOTENTRY_REQUEST,
  FETCH_HOTENTRY_SUCCESS,
  FETCH_HOTENTRY_FAILURE,
  FETCH_MY_BOOKMARK_REQUEST,
  FETCH_MY_BOOKMARK_SUCCESS,
  FETCH_MY_BOOKMARK_FAILURE,
  FETCH_SEARCH_RESULT_REQUEST,
  FETCH_SEARCH_RESULT_SUCCESS,
  FETCH_SEARCH_RESULT_FAILURE,
} from '../constants/actionTypes'

interface IArticle {
  link: string
  title: string
  'hatena:bookmarkcount': number[]
  domain: string
  favicon: string
}

interface ISearchResponse {
  items: IArticle[]
  keyword: string
  offset: number
  total: number
}

export interface IUserData {
  displayName: string
  secret: string
  token: string
}

export interface IHotentrySuccess {
  items: IArticle[]
  index: string
}

const fetchHotentry = createAsyncAction(
  FETCH_HOTENTRY_REQUEST,
  FETCH_HOTENTRY_SUCCESS,
  FETCH_HOTENTRY_FAILURE,
)<{ index: string }, IHotentrySuccess, { index: string }>()

export const loadHotentry = (url: string, indexName: string): (dispatch: ThunkDispatch<IAppState, undefined, any>) => void => (
  dispatch => {
    dispatch(fetchHotentry.request({ index: indexName, }))
    return (
      axios.get(url, { timeout: 5000 })
        .then(res => {
          parseString(res.data, (err: Error, result: any) => {
            let items = result['rdf:RDF'].item

            items.map((data: IArticle, index: number) => {
              items[index].link = data.link[0]
              items[index].title = data.title[0]
              items[index].bookmarkcount = data['hatena:bookmarkcount'][0]
            })
            dispatch(fetchHotentry.success({ items: items, index: indexName, }))
          })
        })
        .catch(error => {
          dispatch(fetchHotentry.failure({ index: indexName }))
        })
    )
  }
)

export const hotentryActions = {
  fetchHotentry,
}


export const fetchBookmarkCache = createAction(
  FETCH_BOOKMARK_CACHE,
)

const fetchMyBookamrk = createAsyncAction(
  FETCH_MY_BOOKMARK_REQUEST,
  FETCH_MY_BOOKMARK_SUCCESS,
  FETCH_MY_BOOKMARK_FAILURE,
)<void, IArticle[], void>()

export const loadMyBookmark = (userData: IUserData): (dispatch: ThunkDispatch<IAppState, undefined, any>) => void => (
  dispatch => {
    dispatch(fetchMyBookamrk.request())

    return (
      axios.get(`http://b.hatena.ne.jp/${userData.displayName}/rss?d=${Date.now()}`, { timeout: 5000 })
        .then(res => {
          parseString(res.data, (err: Error, result: any) => {
            let items = result['rdf:RDF'].item
            items.map((data: IArticle, index: number) => {
              items[index].link = data.link[0]
              items[index].title = data.title[0]
              items[index].bookmarkcount = data['hatena:bookmarkcount'][0]
            })
            dispatch(fetchMyBookamrk.success(items))
          })
        })
        .catch(error => {
          dispatch(fetchMyBookamrk.failure())
        })
    )
  }
)

const fetchSearch = createAsyncAction(
  FETCH_SEARCH_RESULT_REQUEST,
  FETCH_SEARCH_RESULT_SUCCESS,
  FETCH_SEARCH_RESULT_FAILURE,
)<void, ISearchResponse, void>()

export const myBookmarkActions = {
  fetchMyBookamrk,
  fetchSearch,
  fetchBookmarkCache,
}

export const loadSearchResult = (keyword: string, userData: IUserData, offset: number): (dispatch: ThunkDispatch<IAppState, undefined, any>) => void => (
  dispatch => {
    dispatch(fetchSearch.request())

    return (
      axios.get(`https://b.hatena.ne.jp/${userData.displayName}/search/json?q=${keyword}&of=${offset}`)
        .then(res => {
          let items = res.data.bookmarks || []

          if (items.length > 0) {
            items.map((item: any, index: number) => {
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
            total: res.data.meta.total
          }

          dispatch(fetchSearch.success(payload))
        })
        .catch(error => {
          dispatch(fetchSearch.failure())
        })
    )
  }
)