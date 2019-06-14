import { ActionType, getType } from 'typesafe-actions'
import {
  IBookmark,
  actions
} from '../actions/commentList'

export interface ICommentState {
  items?: IBookmark[]
}
const initialState: ICommentState = {
  items: undefined
}

type Actions = ActionType<typeof actions>

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case getType(actions.showComments):
      return Object.assign({}, state,
        {
          items: action.payload.bookmarks
        }
      )

    case getType(actions.hideComments):
      return Object.assign({}, state,
        {
          items: undefined
        }
      )

    default:
      return state
  }
}
