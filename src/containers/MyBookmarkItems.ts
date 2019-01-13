import { connect, } from 'react-redux'
import { ThunkDispatch, } from 'redux-thunk'
import MyBookmarkItems from '../components/MyBookmarkItems'
import {
  getBookmarkArticlesFromApi,
  getSearchResultFromApi,
  fetchBookmarkCache,
  IUserData, 
} from '../actions/fetchArticles'
import { showPage, } from '../actions/webview'
import { IAppState, } from '../reducers/app'
import { IMybookmarkState, } from '../reducers/myBookmark'
import { ILoginState, } from '../reducers/login'

export interface IStateToProps {
  myBookmark: IMybookmarkState
  login: ILoginState
}

const mapStateToProps = (state: IAppState): IStateToProps => {
  return {
    myBookmark: state.myBookmark,
    login: state.login,
  }
}

export interface IDispatchToProps {
  getBookmarkArticlesFromApi: (userData: IUserData) => any
  getSearchResultFromApi: (keyword: string, userData: IUserData, offset: number) => any
  fetchBookmarkCache: () => void
  showPage: (url: string, title: string) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>): IDispatchToProps => {
  return {
    getBookmarkArticlesFromApi: (userData) => dispatch(getBookmarkArticlesFromApi(userData)),
    getSearchResultFromApi: (keyword, userData, offset = 0) => dispatch(getSearchResultFromApi(keyword, userData, offset)),
    fetchBookmarkCache: () => {
      dispatch(fetchBookmarkCache())
    },
    showPage: (url: string, title: string) => { dispatch(showPage(url, title)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBookmarkItems)
