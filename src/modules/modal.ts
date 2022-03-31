import initialState from 'src/store/state'

// Target State
const moduleState = initialState.modal

// Actions
const SET_MODAL_TYPE = 'SET_MODAL_TYPE'
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'
const TOGGLE_MODAL = 'TOGGLE_MODAL'

// Action Creators
export const openModal = (data:object) => {
  return {
    type: OPEN_MODAL,
    payload: { data }
  }
}

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    payload: {}
  }
}

export const toggleModal = (data:object) => {
  return {
    type: TOGGLE_MODAL,
    payload: { data }
  }
}

export const setModalType = (data:object) => {
  return {
    type: SET_MODAL_TYPE,
    payload: { data }
  }
}

// Reducers
const reducers = (state = moduleState, action:any) => {
  switch (action.type) {
    case OPEN_MODAL: {
      const data = action.payload.data
      const type = data.type || ''
      const options = data.options || {}
      return Object.assign({}, state, {
        isOpen: true,
        type,
        options
      })
    }

    case CLOSE_MODAL:
      return Object.assign({}, state, {
        isOpen: false,
        options: {}
      })

    case TOGGLE_MODAL: {
      const data = action.payload.data
      const options = data.options || {}
      return Object.assign({}, state, {
        isOpen: !data.isOpen,
        options: data.isOpen ? options : {}
      })
    }

    case SET_MODAL_TYPE: {
      const data = action.payload.data
      return Object.assign({}, state, {
        type: data.type
      })
    }

    default:
      return state
  }
}

export default reducers
