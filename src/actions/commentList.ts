import { createAction } from 'typesafe-actions'
import { Dispatch } from 'redux'
export const SHOW_COMMENTS = 'SHOW_COMMENTS'
export const CLOSE_COMMENTS = 'CLOSE_COMMENTS'
const apiUrl = 'https://b.hatena.ne.jp/entry/jsonlite/?url='

export interface IBookmark {
  comment: string
  tags: string[]
  timestamp: string
  user: string
}

const showComments = createAction(
  SHOW_COMMENTS, 
  resolve => (bookmarks: IBookmark[]) => resolve({ bookmarks }),
)

export const actions = { showComments }

export const getCommentsFromApi = (url: string) => (
  (dispatch: Dispatch): Promise<void> => {
    return fetch(apiUrl + url)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(showComments(responseJson.bookmarks))
      })
  }
)
