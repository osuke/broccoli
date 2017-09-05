import { SHOW_PAGE } from '../actions/webview'

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
    default:
      return state
  }
}
