import { connect, } from 'react-redux'
import { ThunkDispatch, } from 'redux-thunk'
import NewEntryItems from '../components/NewEntryItems'
import { getArticlesFromApi } from '../actions/fetchArticles'
import { IAppState, } from '../reducers/app'

export interface IDispatchToProps {
  getArticlesFromApi: (url: string, index: string) => any
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>): IDispatchToProps => {
  return {
    getArticlesFromApi: (url, index) => dispatch(getArticlesFromApi(url, index)),
  }
}

export default connect(null, mapDispatchToProps)(NewEntryItems)