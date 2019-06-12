import { connect } from 'react-redux'
import MyBookmark from '../components/MyBookmark'
import { IAppState } from '../reducers/app'

interface IStateToProps {
  isLogin: boolean
}

const mapStateToProps = (state: IAppState): IStateToProps => {
  return {
    isLogin: state.login.isLogin
  }
}

export default connect(mapStateToProps, {})(MyBookmark)
