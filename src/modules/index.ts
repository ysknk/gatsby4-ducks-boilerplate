import { combineReducers } from 'redux'

// NOTE: add component
// import temp from './_temp'
import device from './device'
import modal from './modal'

const reducer = combineReducers({
  // temp,
  device,
  modal
})

export default reducer
