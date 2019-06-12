import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import BookmarkForm from '../components/BookmarkForm'
import {
  saveBookmark,
  deleteBookmark,
  fetchBookmarkData
} from '../actions/bookmarkForm'

import { IAppState } from '../reducers/app'
import { IBookmarkState } from '../reducers/bookmark'
import { IWebviewState } from '../reducers/webview'
import { ILoginState } from '../reducers/login'

export interface IStateToProps {
  bookmark: IBookmarkState
  webview: IWebviewState
  login: ILoginState
}

const mapStateToProps = (state: IAppState): IStateToProps => {
  return {
    bookmark: state.bookmark,
    webview: state.webview,
    login: state.login
  }
}

export interface IDispatchToProps {
  saveBookmark: (userData: ILoginState, url: string, comment: string) => void
  deleteBookmark: (userData: ILoginState, url: string) => void
  fetchBookmarkData: (userData: ILoginState, url: string) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>): IDispatchToProps => {
  return {
    saveBookmark: (userData, url, comment) => { dispatch(saveBookmark(userData, url, comment)) },
    deleteBookmark: (userData, url) => { dispatch(deleteBookmark(userData, url)) },
    fetchBookmarkData: (userData, url) => { dispatch(fetchBookmarkData(userData, url)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkForm)
