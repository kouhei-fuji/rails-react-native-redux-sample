import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { composeWithDevTools } from 'remote-redux-devtools'

import rootReducer from '../reducers'
import rootSaga from '../sagas'
import middlewares from '../middlewares'

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        sagaMiddleware,
        ...middlewares
      )
    )
  )

  sagaMiddleware.run(rootSaga)
  return store
}
