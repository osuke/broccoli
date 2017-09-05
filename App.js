import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers/app'
import thunk from 'redux-thunk';
import Root from './src/containers/Root'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      	<Root />
      </Provider>
    )
  }
}
