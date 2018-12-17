import { Dispatch, Action } from 'redux'
import HatenaLogin from '../utils/login'
const hatenaLogin = new HatenaLogin()

export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const CLOSE_BOOKMARK = 'CLOSE_BOOKMARK'
export const SHOW_BOOKMARK_DATA = 'SHOW_BOOKMARK_DATA'

export interface IBookmarkData {
  comment: string
  isBookmark: boolean
  tags: string[]
}

export interface IShowBookmarkData extends Action {
  payload: IBookmarkData
}

export interface IUserData {
  userData: {
    token: string
    secret: string
    urlName: string
  }
}

export const addBookmark = (): Action => (
  {
    type: ADD_BOOKMARK
  }
)

export const closeBookmark = (): Action => (
  {
    type: CLOSE_BOOKMARK
  }
)

export const showBookmarkData = (obj: IBookmarkData): IShowBookmarkData => (
  {
    type: SHOW_BOOKMARK_DATA,
    payload: {
      comment: obj.comment,
      isBookmark: obj.isBookmark,
      tags: obj.tags
    }
  }
)

export const saveBookmark = (userData: IUserData, url: string, comment = ''): (dispatch: Dispatch) => void => (
  dispatch => {
    hatenaLogin.sendRequest(
      'POST',
      'http://api.b.hatena.ne.jp/1/my/bookmark',
      userData.userData.token,
      userData.userData.secret,
      {
        url: url,
        comment: comment
      }
    )

    dispatch(closeBookmark())
  }
)

export const deleteBookmark = (userData: IUserData, url: string): (dispatch: Dispatch) => void => (
  dispatch => {
    hatenaLogin.sendRequest(
      'DELETE',
      'http://api.b.hatena.ne.jp/1/my/bookmark',
      userData.userData.token,
      userData.userData.secret,
      {
        url: url
      }
    )

    dispatch(closeBookmark())
  }
)

export const fetchBookmarkData = (userData: IUserData, url: string): (dispatch: Dispatch) => void => (
  dispatch => {
    hatenaLogin.sendRequest(
      'GET',
      `http://b.hatena.ne.jp/entry/jsonlite/?url=${url}&date=${Date.now()}broccoli`,
      userData.userData.token,
      userData.userData.secret,
    ).then(data => {
      let obj: IBookmarkData = {
        comment: '',
        isBookmark: false,
        tags: [],
      }

      data.bookmarks.map((val: any) => {
        if (val.user === userData.userData.urlName) {
          console.log(val)
          obj.comment = val.comment
          obj.isBookmark = true
          obj.tags = val.tags
        }
      })
      dispatch(showBookmarkData(obj))
    })
  }
)
