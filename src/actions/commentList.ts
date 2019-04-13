import { createAction, } from 'typesafe-actions'
import { Dispatch, } from 'redux'
import { COMMENT_SHOW, COMMENT_HIDE, } from '../constants/actionTypes'

const apiUrl = 'https://b.hatena.ne.jp/entry/jsonlite/?url='

export interface IBookmark {
  comment: string
  tags: string[]
  timestamp: string
  user: string
}

const showComments = createAction(
  COMMENT_SHOW, 
  resolve => (bookmarks: IBookmark[]) => resolve({ bookmarks }),
)

export const hideComments = createAction(
  COMMENT_HIDE, 
  resolve => () => resolve({ bookmarks: [] }),
)

export const actions = { showComments, hideComments }

export const getCommentsFromApi = (url: string) => (
  (dispatch: Dispatch): Promise<void> => {
    return fetch(apiUrl + url)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(showComments(responseJson.bookmarks))
      })
  }
)
