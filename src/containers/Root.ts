import { connect } from 'react-redux'
import Root from '../components/Root'
import { IAppState } from '../reducers/app'

export type IStateToProps = IAppState
const mapStateToProps = (state: IAppState): IAppState => {
  return state
}

export default connect(mapStateToProps)(Root)
