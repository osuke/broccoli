import { combineReducers } from 'redux'
import category from './category'
import webview from './webview'
import commentList from './commentList'

export default combineReducers({
  category,
  webview,
  commentList
})
