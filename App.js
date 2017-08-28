import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers/app'
import Root from './src/containers/Root'

const store = createStore(reducer)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      	<Root />
      </Provider>
    )
  }
}
