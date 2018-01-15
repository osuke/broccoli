import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import App from './src/App'
import configureStore from './src/configureStore'

const { persistor, store } = configureStore()

export default class Bagle extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
      	  <App />
        </PersistGate>
      </Provider>
    )
  }
}
