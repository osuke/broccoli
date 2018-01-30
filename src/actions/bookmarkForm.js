import HatenaLogin from '../utils/login'
import { Actions } from 'react-native-router-flux'
const hatenaLogin = new HatenaLogin()

export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const CLOSE_BOOKMARK = 'CLOSE_BOOKMARK'
export const SHOW_BOOKMARK_DATA = 'SHOW_BOOKMARK_DATA'

export const addBookmark = () => (
  {
    type: ADD_BOOKMARK
  }
)

export const closeBookmark = () => (
  {
    type: CLOSE_BOOKMARK
  }
)

export const showBookmarkData = (comment) => (
  {
    type: SHOW_BOOKMARK_DATA,
    payload: {
      comment: comment
    }
  }
)

export const saveBookmark = (userData, url, comment = '') => (
  (dispatch) => {
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

export const fetchBookmarkData = (userData, url) => (
  (dispatch) => {
    hatenaLogin.sendRequest(
      'GET',
      'http://b.hatena.ne.jp/entry/jsonlite/?url=' + url + '&date=' + Date.now(),
      userData.userData.token,
      userData.userData.secret,
    ).then((data) => {
      let comment = ''
      data.bookmarks.map((val) => {
        if (val.user === userData.userData.urlName) {
          comment = val.comment
        }
      })
      dispatch(showBookmarkData(comment))
    })
  }
)
