import { applyMiddleware, compose, createStore as reduxCreateStore } from 'redux'
import thunk from 'redux-thunk'
import state from './state'
import reducers from '../modules/'

const composeEnhancers = typeof window !== 'undefined'
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose

const middleWares = [thunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleWares)
)

export default function createStore () {
  return reduxCreateStore(
    reducers,
    state,
    enhancer
  )
}
