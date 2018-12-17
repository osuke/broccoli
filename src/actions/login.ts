import { NavState } from 'react-native'
import { Dispatch, Action } from 'redux'
import HatenaLogin from '../utils/login'
const hatenaLogin = new HatenaLogin()
export const REQUEST_TOKEN = 'REQUEST_TOKEN'
export const SET_USER_DATA = 'SET_USER_DATA'
export const LOGOUT = 'LOGOUT'

export interface IUserData {
  displayName: string
  urlName: string
  token: string
  secret: string
}

export interface ITokenData {
  requestToken: string
  tokenSecret: string
}

export interface ISetOauthUrl extends Action {
  payload: {
    url: string
  }
}

export interface ISetUserData extends Action {
  payload: {
    isLogin: boolean
    url: null
    userData: IUserData,
  }
}

export const setOauthUrl = (tokenData: ITokenData): ISetOauthUrl => (
  {
    type: REQUEST_TOKEN,
    payload: {
      url: 'https://www.hatena.ne.jp/oauth/authorize?oauth_token=' + tokenData.requestToken
    }
  }
)

export const setUserData = (userData: IUserData): ISetUserData => (
  {
    type: SET_USER_DATA,
    payload: {
      isLogin: true,
      url: null,
      userData: userData,
    }
  }
)

export const logout = (): Action => (
  {
    type: LOGOUT,
  }
)

export const getRequestToken = (): (dispatch: Dispatch) => void => (
  (dispatch: Dispatch) => {
    hatenaLogin.getRequestToken().then((res: any) => {
      dispatch(setOauthUrl(res))
    })
  }
)

export const getAccessToken = (e: NavState): (dispatch: Dispatch) => void => (
  (dispatch: Dispatch) => {
    if (e.url && e.url.indexOf('oauth_token') !== -1 && e.url.indexOf('oauth_verifier') !== -1) {
      hatenaLogin.getAccessToken(e).then(res => {
        if (typeof res === 'object') {
          const userData: IUserData = {
            displayName: res.display_name,
            urlName: res.url_name,
            token: decodeURIComponent(res.oauth_token),
            secret: decodeURIComponent(res.oauth_token_secret),
          }

          dispatch(setUserData(userData))
          console.log(userData)
        }
      })
    }
  }
)