import {
  ADD_BOOKMARK,
  CLOSE_BOOKMARK,
  SHOW_BOOKMARK_DATA,
  IShowBookmarkData,
} from '../actions/bookmarkForm'

export interface IBookmarkState {
  visible: boolean
  isBookmark: boolean
  comment: string
  tags: string[]
}

const initialState: IBookmarkState = {
  visible: false,
  isBookmark: false,
  comment: '',
  tags: [],
}

type ActionTypes = IShowBookmarkData

export default (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return Object.assign({}, state,
        {
          visible: true,
        }
      )
    case CLOSE_BOOKMARK:
      return Object.assign({}, state,
        {
          visible: false,
        }
      )
    case SHOW_BOOKMARK_DATA:
      return Object.assign({}, state,
        {
          isBookmark: action.payload.isBookmark,
          comment: action.payload.comment,
          tags: action.payload.tags,
        }
      )
    default:
      return state
  }
}
