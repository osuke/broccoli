import { Alert } from 'react-native'
import crypto from 'crypto-js'
import Base64 from 'crypto-js/enc-base64'
import oAuth from 'oauth-1.0a'
import qs from 'qs'
import config from '../../token.json'
import { Actions } from 'react-native-router-flux'

interface IRequestData {
  url: string
  method: 'POST'
  data: {
    oauth_callback: string
  } | {
    oauth_verifier: string
  }
  headers?: any
}

interface ITokenData {
  requestToken: string
  tokenSecret: string
}

export default class HatenaLogin {
  oauth: oAuth
  requestToken: string = ''
  tokenSecret: string = ''

  constructor () {
    this.oauth = new oAuth({
      consumer: {
        key: config.consumerKey,
        secret: config.consumerSecret
      },
      signature_method: 'HMAC-SHA1',
      hash_function: (baseString, key) => {
        return Base64.stringify(crypto.HmacSHA1(baseString, key))
      }
    })
  }

  getRequestToken () {
    const requestData: IRequestData = {
      url: 'https://www.hatena.com/oauth/initiate?scope=read_public,write_public,read_private,write_private',
      method: 'POST',
      data: {
        oauth_callback: config.callbackUrl
      }
    }

    requestData.headers = this.oauth.toHeader(this.oauth.authorize(requestData))
    requestData.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    return fetch(requestData.url, {
      method: requestData.method,
      headers: requestData.headers
    }).then((res: any) => {
      let tokenData = this.getTokenData(res._bodyText)
      tokenData.requestToken = encodeURIComponent(tokenData.requestToken)
      tokenData.tokenSecret = encodeURIComponent(tokenData.tokenSecret)
      this.requestToken = decodeURIComponent(tokenData.requestToken)
      this.tokenSecret = decodeURIComponent(tokenData.tokenSecret)
      console.log(tokenData)
      return tokenData
    })
  }

  getAccessToken (e: any) {
    console.log('acc')
    Actions.pop()
    const urlArray = e.url.match(/\?oauth_token=([^&]*)&oauth_verifier=([^&]*)/)

    const requestData: IRequestData = {
      url: 'https://www.hatena.com/oauth/token',
      method: 'POST',
      data: {
        oauth_verifier: decodeURIComponent(urlArray[2])
      }
    }

    const token = {
      key: this.requestToken,
      secret: this.tokenSecret
    }

    requestData.headers = this.oauth.toHeader(this.oauth.authorize(requestData, token))
    requestData.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    return fetch(requestData.url, {
      method: requestData.method,
      headers: requestData.headers
    })
  }

  getTokenData (text: string) {
    interface IData {
      requestToken: string
      tokenSecret: string
    }

    let data: IData = {
      requestToken: '',
      tokenSecret: ''
    }

    text.split('&').map(o => {
      const query = o.split('=')

      if (query[0] === 'oauth_token') {
        data.requestToken = decodeURIComponent(query[1])
      }

      if (query[0] === 'oauth_token_secret') {
        data.tokenSecret = decodeURIComponent(query[1])
      }
    })

    return data
  }

  sendRequest (method: string, url: string, accessToken: string, accessTokenSecret: string, options = {}) {
    return new Promise((resolve, reject) => {
      interface IRequestData {
        url: string
        method: string
        data: any
        headers?: any
      }

      const requestData: IRequestData = {
        url,
        method,
        data: options
      }

      const token = {
        key: accessToken,
        secret: accessTokenSecret
      }

      if (!token.key.length || !token.secret.length) return

      requestData.headers = this.oauth.toHeader(this.oauth.authorize(requestData, token))

      if (method.toUpperCase() !== 'GET') {
        requestData.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        requestData.headers['Access-Control-Allow-Methods'] = 'GET,POST,DELETE,HEAD,OPTIONS'
      }

      interface IObj {
        method: string
        headers: any
        body?: string
      }

      const obj: IObj = {
        method: requestData.method,
        headers: requestData.headers
      }

      if (method === 'POST' || method === 'DELETE') {
        obj.body = qs.stringify(options)
      }

      return fetch(url, obj).then((resp: any) => {
        if (resp._bodyText.match(/^401 Unauthorized/)) {
          Alert.alert('認証の有効期限が切れました。')
          Actions.login()

          resolve({})
        }

        if (resp._bodyText !== '') {
          resolve(resp.json())
        }

        return {}
      }).catch(e => {
        console.log(e)
        console.log('Error Occuered: request')
        Alert.alert('しばらく時間を空けてから、もう一度お試しください')
      })
    })
  }
}
