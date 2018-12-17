import { Action, Dispatch } from 'redux'
export const SHOW_COMMENTS = 'SHOW_COMMENTS'
export const CLOSE_COMMENTS = 'CLOSE_COMMENTS'
const apiUrl = 'https://b.hatena.ne.jp/entry/jsonlite/?url='

interface IBookmark {
  comment: string
  tags: string[]
  timestamp: string
  user: string
}

interface IShowComments extends Action {
  payload: {
    bookmarks: IBookmark[]
  }
}

export const showComments = (bookmarks: IBookmark[]): IShowComments => (
  {
    type: SHOW_COMMENTS,
    payload: {
      bookmarks,
    }
  }
)

export const closeComments = (): Action => (
  {
    type: CLOSE_COMMENTS
  }
)

export const getCommentsFromApi = (url: string) => (
  (dispatch: Dispatch): Promise<void> => {
    return fetch(apiUrl + url)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(showComments(responseJson.bookmarks))
      })
  }
)
