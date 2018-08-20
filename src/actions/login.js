import HatenaLogin from '../utils/login'
const hatenaLogin = new HatenaLogin()
export const REQUEST_TOKEN = 'REQUEST_TOKEN'
export const SET_USER_DATA = 'SET_USER_DATA'
export const LOGOUT = 'LOGOUT'

export const setOauthUrl = tokenData => {
  return (
    {
      type: REQUEST_TOKEN,
      payload: {
        url: 'https://www.hatena.ne.jp/oauth/authorize?oauth_token=' + tokenData.requestToken
      }
    }
  )
}

export const setUserData = userData => {
  return (
    {
      type: SET_USER_DATA,
      payload: {
        isLogin: true,
        url: null,
        userData: userData,
      }
    }
  )
}

export const logout = () => (
  {
    type: LOGOUT,
  }
)

export const getRequestToken = () => (
  dispatch => {
    hatenaLogin.getRequestToken().then((res) => {
      dispatch(setOauthUrl(res))
    })
  }
)

export const getAccessToken = e => (
  dispatch => {

    if (e.url.indexOf('oauth_token') !== -1 && e.url.indexOf('oauth_verifier') !== -1) {
      let userData = {}

      hatenaLogin.getAccessToken(e).then(res => {
        if (typeof res === 'object') {
          userData.displayName = res.display_name
          userData.urlName = res.url_name
          userData.token = decodeURIComponent(res.oauth_token)
          userData.secret = decodeURIComponent(res.oauth_token_secret)

          dispatch(setUserData(userData))
        }
      })

      return {}
    }
  }
)