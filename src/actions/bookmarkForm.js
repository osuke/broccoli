import HatenaLogin from '../utils/login'
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

export const showBookmarkData = obj => (
  {
    type: SHOW_BOOKMARK_DATA,
    payload: {
      comment: obj.comment,
      isBookmark: obj.isBookmark,
      tags: obj.tags
    }
  }
)

export const saveBookmark = (userData, url, comment = '') => (
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

export const deleteBookmark = (userData, url) => (
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

export const fetchBookmarkData = (userData, url) => (
  dispatch => {
    hatenaLogin.sendRequest(
      'GET',
      'http://b.hatena.ne.jp/entry/jsonlite/?url=' + url + '&date=' + Date.now(),
      userData.userData.token,
      userData.userData.secret,
    ).then(data => {
      let obj = {
        comment: '',
        isBookmark: false,
        tags: [],
      }

      data.bookmarks.map(val => {
        if (val.user === userData.userData.urlName) {
          obj.comment = val.comment
          obj.isBookmark = true
          obj.tags = val.tags
        }
      })
      dispatch(showBookmarkData(obj))
    })
  }
)