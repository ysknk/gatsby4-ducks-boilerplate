import initialState from 'src/store/state'

// Target State
const moduleState = initialState.device

// Actions
const SET_MEDIA = 'SET_MEDIA'

// Action Creators
export const setMedia = (bool: boolean) => {
  return {
    type: SET_MEDIA,
    payload: {
      bool
    }
  }
}

// Reducers
const reducers = (state = moduleState, action: any) => {
  switch (action.type) {
    case SET_MEDIA:
      return Object.assign({}, state, {
        media: action.payload.bool ? 'sp' : 'pc'
      })
    default:
      return state
  }
}

export default reducers
