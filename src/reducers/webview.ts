import { ActionType, getType } from 'typesafe-actions'
import {
  actions,
} from '../actions/webview'

type Actions = ActionType<typeof actions>

export interface IWebviewState {
  url?: string
  title?: string
  visible: boolean
  isLoading: boolean
}

const initialState: IWebviewState = {
  visible: false,
  isLoading: false
}

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case getType(actions.showPage):
      return Object.assign({}, state, {
        url: action.payload.url,
        title: action.payload.title,
        visible: true
      })

    case getType(actions.hidePage):
      return Object.assign({}, state, {
        url: null,
        title: null,
        visible: false
      })

    case getType(actions.showSpinner):
      return Object.assign({}, state, {
        isLoading: true
      })

    case getType(actions.hideSpinner):
      return Object.assign({}, state, {
        isLoading: false
      })

    default:
      return state
  }
}
