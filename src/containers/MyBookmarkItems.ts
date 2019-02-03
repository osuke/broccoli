import { connect, } from 'react-redux'
import { ThunkDispatch, } from 'redux-thunk'
import MyBookmarkItems from '../components/MyBookmarkItems'
import {
  loadSearchResult,
  fetchBookmarkCache,
  IUserData,
  loadMyBookmark,
} from '../actions/fetchArticles'
import { IAppState, } from '../reducers/app'

export type IStateToProps = IAppState

export type IDispatch = ThunkDispatch<IAppState, undefined, any>

const mapStateToProps = (state: IAppState): IStateToProps => {
  return state
}

export interface IDispatchToProps {
  dispatch: IDispatch
}

export interface IMergeProps extends IAppState {
  loadMyBookmark: () => void
  getSearchResultFromApi: (keyword: string, offset: number) => void
  fetchBookmarkCache: () => void
}

const mapDispatchToProps = (dispatch: IDispatch): IDispatchToProps => ({ dispatch })

const mergeProps = (state: IAppState, { dispatch }: { dispatch: IDispatch }): IMergeProps => ({
  ...state,
  loadMyBookmark: () => {
    if (state.login.isLogin && state.login.userData) {
      dispatch(loadMyBookmark(state.login.userData))
    }
  },
  getSearchResultFromApi: (keyword, offset) => {
    if (state.login.userData) {
      dispatch(loadSearchResult(keyword, state.login.userData, offset,))
    }
  },
  fetchBookmarkCache: () => {
    dispatch(fetchBookmarkCache())
  },
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(MyBookmarkItems)
