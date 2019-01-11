import { connect, } from 'react-redux'
import { ThunkDispatch, } from 'redux-thunk'
import Setting from '../components/Setting'
import { logout, } from '../actions/login'
import { IAppState, } from '../reducers/app'

export interface IStateToProps {
  isLogin: boolean
}

export const mapStateToProps = (state: IAppState): IStateToProps  => {
  return {
    isLogin: state.login.isLogin
  }
}

export interface IDispatchToProps {
  logout: () => void
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IAppState, undefined, any>): IDispatchToProps => {
  return {
    logout: () => { dispatch(logout()) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting)
