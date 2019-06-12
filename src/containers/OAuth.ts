import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import OAuth from '../components/OAuth'
import { getRequestToken, getAccessToken } from '../actions/login'
import { NavState } from 'react-native'
import { IAppState } from '../reducers/app'
import { ILoginState } from '../reducers/login'

export type IStateToPorps = ILoginState

const mapStateToProps = (state: IAppState): IStateToPorps => {
  return state.login
}

export interface IDispatchToProps {
  getRequestToken: () => void
  getAccessToken: (e: NavState) => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>): IDispatchToProps => {
  return {
    getRequestToken: () => { dispatch(getRequestToken()) },
    getAccessToken: e => { dispatch(getAccessToken(e)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OAuth)
