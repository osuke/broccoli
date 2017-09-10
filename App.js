import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers/app'
import thunk from 'redux-thunk';
import App from './src/App'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default class Bagle extends React.Component {
  render () {
    return (
      <Provider store={store}>
      	<App />
      </Provider>
    )
  }
}
