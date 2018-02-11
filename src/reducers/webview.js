import {
  SHOW_PAGE,
  HIDE_PAGE,
  SHOW_SPINNER,
  HIDE_SPINNER
} from '../actions/webview'

const initialState = {
  url: null,
  title: null,
  visible: false,
  isLoading: false
}

export default (state = initialState, action) => {

  switch (action.type) {
    case SHOW_PAGE:
      return Object.assign({}, state, {
        url: action.payload.url,
        title: action.payload.title,
        visible: true
      })
    case HIDE_PAGE:
      return Object.assign({}, state, {
        url: null,
        title: null,
        visible: false
      })
    case SHOW_SPINNER:
      return Object.assign({}, state, {
        isLoading: true
      })
    case HIDE_SPINNER:
      return Object.assign({}, state, {
        isLoading: false
      })
    default:
      return state
  }
}
