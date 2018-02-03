import {
  ADD_BOOKMARK,
  CLOSE_BOOKMARK,
  SHOW_BOOKMARK_DATA
} from '../actions/bookmarkForm'

const initialState = {
  visible: false,
  isBookmark: false,
  comment: ''
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
    case SHOW_BOOKMARK_DATA:
      return Object.assign({}, state,
        {
          isBookmark: action.payload.isBookmark,
          comment: action.payload.comment
        }
      )
    default:
      return state
  }
}
