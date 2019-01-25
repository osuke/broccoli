import { connect, } from 'react-redux'
import { Dispatch, } from 'redux'
import { ThunkDispatch, } from 'redux-thunk'
import NewEntryItems from '../components/NewEntryItems'
import { loadHotentry, } from '../actions/fetchArticles'
import { IAppState, } from '../reducers/app'

export interface IDispatchToProps {
  loadHotentry: (url: string, index: string) => void
}

const mapStateToProps = (state: IAppState): IAppState => {
  return state
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>): IDispatchToProps => {
  return {
    loadHotentry: (url, index) => dispatch(loadHotentry(url, index)),
  }
}

export default connect<IAppState, IDispatchToProps, {}, IAppState>(mapStateToProps, mapDispatchToProps)(NewEntryItems)