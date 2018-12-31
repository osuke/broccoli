import { ActionType } from 'typesafe-actions'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import ArticleDetail from '../components/ArticleDetail'
import { getCommentsFromApi } from '../actions/commentList'
import { fetchBookmarkData, } from '../actions/bookmarkForm'
import {
  showSpinner,
  hideSpinner,
} from '../actions/webview'
import { IAppState } from '../reducers/app';
import { IWebviewState, } from '../reducers/webview';
import { ILoginState, } from '../reducers/login';

const actions = { fetchBookmarkData, getCommentsFromApi, showSpinner, hideSpinner, }

type ActionTypes = ActionType<typeof actions>

interface IStateToProps {
  login: ILoginState
  webview: IWebviewState
}

interface IDispatchToProps {
  fetchBookmarkData: (userData: any, url: string) => void
  getCommentsFromApi: (url: string) => void
  showSpinner: () => void
  hideSpinner: () => void
}

const mapStateToProps = (state: IAppState): IStateToProps => {
  return {
    login: state.login,
    webview: state.webview,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>) => {
  return {
    fetchBookmarkData: (userData: any, url: string) => { dispatch(fetchBookmarkData(userData, url)) },
    getCommentsFromApi: (url: any) => { dispatch(getCommentsFromApi(url)) },
    showSpinner: () => { dispatch(showSpinner()) },
    hideSpinner: () => { dispatch(hideSpinner()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail)
