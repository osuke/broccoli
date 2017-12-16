import { combineReducers } from 'redux'
import category from './category'
import webview from './webview'
import commentList from './commentList'
import login from './login'
import bookmark from './bookmark'

export default combineReducers({
  category,
  webview,
  commentList,
  login,
  bookmark
})
