import { ActionType } from 'typesafe-actions'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import Article from '../components/Article'
import { showPage } from '../actions/webview'

interface IDispatchToProps {
  showPage: (url: string, title: string) => void
}
const actions = { showPage, }
type ActionTypes = ActionType<typeof actions>

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): IDispatchToProps => {
  return {
    showPage: (url, title) => {
      dispatch(showPage(url, title))
      Actions.externalPage()
    },
  }
}

export default connect(null, mapDispatchToProps)(Article)
