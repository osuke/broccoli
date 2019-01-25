import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers/app'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'root',
  whitelist: ['order', 'login'],
  storage
}

const reducer = persistCombineReducers(config, reducers as any)

export default () => {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk)
    )
  )

  const persistor = persistStore(store)

  return { persistor, store }
}
