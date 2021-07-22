import { createStore, applyMiddleware, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas'
import reducers from '../reducers'

export const logger: Middleware = store => next => action => {
  if (typeof action !== 'function') {
    console.log('Dispatching:', action)
  }
  return next(action)
}

export const sagaMiddleware = createSagaMiddleware()
export const middleware = [logger, sagaMiddleware]

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)

sagaMiddleware.run(sagas)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof  store.dispatch
export default store
