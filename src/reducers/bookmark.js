import { ADD_BOOKMARK, CLOSE_BOOKMARK } from '../actions/bookmarkForm'

const initialState = {
  visible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return Object.assign({}, state,
        {
          visible: true
        }
      )
    case CLOSE_BOOKMARK:
      return Object.assign({}, state,
        {
          visible: false
        }
      )
    default:
      return state
  }
}
