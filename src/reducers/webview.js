import { SHOW_PAGE, HIDE_PAGE } from '../actions/webview'

const initialState = {
  url: null,
  title: null,
  visible: false
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
    default:
      return state
  }
}
