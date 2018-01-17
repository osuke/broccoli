import { REQUEST_TOKEN, SET_USER_DATA, LOGOUT } from '../actions/login'

const initialState = {
  isLogin: false,
  url: null,
  userData: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOKEN:
      return Object.assign({}, state,
        {
          url: action.payload.url
        }
      )
    case SET_USER_DATA:
      return Object.assign({}, state,
        {
          isLogin: action.payload.isLogin,
          url: action.payload.url,
          userData: action.payload.userData
        }
      )
    case LOGOUT:
      return initialState
    default:
      return state
  }
}
