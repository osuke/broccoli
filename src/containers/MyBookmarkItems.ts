import { connect, } from 'react-redux'
import { ThunkDispatch, } from 'redux-thunk'
import MyBookmarkItems from '../components/MyBookmarkItems'
import {
  getSearchResultFromApi,
  fetchBookmarkCache,
  IUserData,
  loadMyBookmark,
} from '../actions/fetchArticles'
import { showPage, } from '../actions/webview'
import { IAppState, } from '../reducers/app'

export type IStateToProps = IAppState

const mapStateToProps = (state: IAppState): IStateToProps => {
  return state
}

export interface IDispatchToProps {
  loadMyBookmark: (userData: IUserData) => void
  getSearchResultFromApi: (keyword: string, userData: IUserData, offset: number) => any
  fetchBookmarkCache: () => void
  showPage: (url: string, title: string) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>, hoge: any): IDispatchToProps => {
  return {
    loadMyBookmark: (userData) => dispatch(loadMyBookmark(userData)),
    getSearchResultFromApi: (keyword, userData, offset = 0) => dispatch(getSearchResultFromApi(keyword, userData, offset)),
    fetchBookmarkCache: () => {
      dispatch(fetchBookmarkCache())
    },
    showPage: (url: string, title: string) => { dispatch(showPage(url, title)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBookmarkItems)
