import { ActionType, getType, } from 'typesafe-actions'
import { actions, } from '../actions/login'

type Actions = ActionType<typeof actions>

export interface ILoginState {
  isLogin: boolean
  url: string | null
  userData: string | null
}

const initialState: ILoginState = {
  isLogin: false,
  url: null,
  userData: null
}

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case getType(actions.setRequestToken):
      return Object.assign({}, state,
        {
          url: action.payload.url
        }
      )

    case getType(actions.setUserData):
      return Object.assign({}, state,
        {
          isLogin: action.payload.isLogin,
          url: action.payload.url,
          userData: action.payload.userData
        }
      )

    case getType(actions.logout):
      return initialState
    default:
      return state
  }
}
