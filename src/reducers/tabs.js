import { SWITCH_TABS } from '../actions/tabs'

const initialState = {
  currentTab: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_TABS:
      return Object.assign({}, state, {
        currentTab: action.payload
      })
    default:
      return state
  }
}
