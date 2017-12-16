import HatenaLogin from '../utils/login'
import { Actions } from 'react-native-router-flux'
const hatenaLogin = new HatenaLogin()

export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const CLOSE_BOOKMARK = 'CLOSE_BOOKMARK'

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
