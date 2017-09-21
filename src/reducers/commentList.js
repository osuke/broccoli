import { SHOW_COMMENTS, CLOSE_COMMENTS } from '../actions/commentList'

const initialState = {
  visible: false,
  items: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_COMMENTS:
      console.log(action)
      return Object.assign({}, state,
        {
          visible: true,
          items: action.payload.item.bookmarks
        }
      )
    case CLOSE_COMMENTS:
      return Object.assign({}, state,
        {
          visible: false,
          items: []
        }
      )
    default:
      return state
  }
}
