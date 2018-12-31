import { connect } from 'react-redux'
import NewEntryItems from '../components/NewEntryItems'
import { getArticlesFromApi } from '../actions/fetchArticles'

const mapDispatchToProps = dispatch => {
  return {
    getArticlesFromApi: (url, index) => dispatch(getArticlesFromApi(url, index)),
  }
}

export default connect(null, mapDispatchToProps)(NewEntryItems)