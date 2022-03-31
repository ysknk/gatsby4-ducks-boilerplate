import React from 'react'
import { Provider } from 'react-redux'
import createStore from './store/create'

// eslint-disable-next-line react/display-name
export default ({ element }: { element: JSX.Element | JSX.Element[] }) => {
  return (
    <Provider store={createStore()}>{element}</Provider>
  )
}
