import { SHOW_COMMENTS, CLOSE_COMMENTS } from '../actions/commentList'

const initialState = {
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COMMENTS:
      return Object.assign({}, state,
        {
          items: action.payload.bookmarks,
        }
      )
    case CLOSE_COMMENTS:
      return Object.assign({}, state,
        {
          items: [],
        }
      )
    default:
      return state
  }
}
