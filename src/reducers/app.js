import { combineReducers } from 'redux'
import category from './category'
import webview from './webview'
import commentList from './commentList'
import login from './login'
import bookmark from './bookmark'
import order from './order'

export default {
  category,
  order,
  webview,
  commentList,
  login,
  bookmark
}
