import { connect } from 'react-redux'
import MyBookmarkItems from '../components/MyBookmarkItems'
import {
  getBookmarkArticlesFromApi,
  getSearchResultFromApi,
  fetchBookmarkCache,
} from '../actions/fetchArticles'
import { showPage } from '../actions/webview'

const mapStateToProps = (state: any) => {
  return {
    myBookmark: state.myBookmark,
    login: state.login,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBookmarkArticlesFromApi: (displayName: any) => dispatch(getBookmarkArticlesFromApi(displayName)),
    getSearchResultFromApi: (keyword: any, userData: any, offset: number = 0) => dispatch(getSearchResultFromApi(keyword, userData, offset)),
    fetchBookmarkCache: () => {
      dispatch(fetchBookmarkCache())
    },
    showPage: (url: string, title: string) => { dispatch(showPage(url, title)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyBookmarkItems)
