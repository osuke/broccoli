import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers/app'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'root',
  whitelist: ['order', 'login'],
  storage
}

const reducer = persistCombineReducers(config, reducers)

export default () => {
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk)
    )
  )

  const persistor = persistStore(store)

  return { persistor, store }
}
