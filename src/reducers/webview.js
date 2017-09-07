import { SHOW_PAGE, HIDE_PAGE } from '../actions/webview'

const initialState = {
  url: null,
  visible: false
}

export default (state = initialState, action) => {

  switch (action.type) {
    case SHOW_PAGE:
      return Object.assign({}, state, {
        url: action.payload.url,
        visible: true
      })
    case HIDE_PAGE:
      return Object.assign({}, state, {
        url: null,
        visible: false
      })
    default:
      return state
  }
}
