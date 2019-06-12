import { ActionType, getType } from 'typesafe-actions'
import {
  actions
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
  tags: []
}

type Actions = ActionType<typeof actions>

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case getType(actions.addBookmark):
      return Object.assign({}, state,
        {
          visible: true
        }
      )
    case getType(actions.closeBookmark):
      return Object.assign({}, state,
        {
          visible: false
        }
      )
    case getType(actions.showBookmarkData):
      return Object.assign({}, state,
        {
          isBookmark: action.payload.isBookmark,
          comment: action.payload.comment,
          tags: action.payload.tags
        }
      )
    default:
      return state
  }
}
