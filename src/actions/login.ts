import { NavState } from 'react-native'
import { createAction } from 'typesafe-actions'
import { Dispatch, } from 'redux'
import queryString from 'query-string'
import HatenaLogin from '../utils/login'
const hatenaLogin = new HatenaLogin()
import {
  LOGIN_SET_REQUEST_TOKEN,
  LOGIN_SET_USER_DATA,
  LOGIN_LOGOUT,
} from '../constants/actionTypes'

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

export const setRequestToken = createAction(
  LOGIN_SET_REQUEST_TOKEN, 
  resolve => (tokenData: ITokenData) => resolve({ url: `https://www.hatena.ne.jp/oauth/authorize?oauth_token=${tokenData.requestToken}`}),
)

export const setUserData = createAction(
  LOGIN_SET_USER_DATA, 
  resolve => (userData: IUserData) => {
    return resolve({
      isLogin: true,
      url: null,
      userData: userData,
    })
  },
)

export const logout = createAction(
  LOGIN_LOGOUT, 
)

export const actions = { setRequestToken, setUserData, logout, }

export const getRequestToken = (): (dispatch: Dispatch) => void => (
  (dispatch: Dispatch) => {
    hatenaLogin.getRequestToken().then((res: any) => {
      dispatch(setRequestToken(res))
    })
  }
)

export const getAccessToken = (e: NavState): (dispatch: Dispatch) => void => (
  (dispatch: Dispatch) => {
    if (e.url && e.url.indexOf('oauth_token') !== -1 && e.url.indexOf('oauth_verifier') !== -1) {
      hatenaLogin.getAccessToken(e).then((res: any) => {
        const dataArr = res._bodyText.split('&')
        const dataObj: any = {}

        for (const item of dataArr) {
          const tmp = item.split('=')
          dataObj[tmp[0]] = tmp[1]
        }

        const userData: IUserData = {
          displayName: dataObj.display_name,
          urlName: dataObj.url_name,
          token: decodeURIComponent(dataObj.oauth_token),
          secret: decodeURIComponent(dataObj.oauth_token_secret),
        }

        dispatch(setUserData(userData))
      }).catch(() => {
      });
    }
  }
)