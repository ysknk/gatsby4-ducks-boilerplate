import * as React from 'react'
import { useSelector } from 'react-redux'

import { IInitialState } from 'src/store/state'

import Modal from 'src/components/atoms/common/Modal/index'
import Default from 'src/components/molecules/Modal/Default'

interface IProps {
  children?: React.ReactNode
}

const Component: React.FC<IProps> = (props) => {
  const state = useSelector((state:IInitialState) => state)

  return state.modal.isOpen
    ? (
        // <Modal />
        <Modal>
          {state.modal.type.match(/^default$/i) && (
            <Default options={state.modal?.options} />
          )}
        </Modal>
      )
    : null
}
export default Component
