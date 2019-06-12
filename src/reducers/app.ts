import category, { ICategoryState } from './category'
import webview, { IWebviewState } from './webview'
import commentList, { ICommentState } from './commentList'
import login, { ILoginState } from './login'
import bookmark, { IBookmarkState } from './bookmark'
import myBookmark, { IMybookmarkState } from './myBookmark'
import order, { IOrderState } from './order'

export interface IAppState {
  category: ICategoryState
  order: IOrderState
  webview: IWebviewState
  commentList: ICommentState
  login: ILoginState
  bookmark: IBookmarkState
  myBookmark: IMybookmarkState
}

export default {
  category,
  order,
  webview,
  commentList,
  login,
  bookmark,
  myBookmark
}
