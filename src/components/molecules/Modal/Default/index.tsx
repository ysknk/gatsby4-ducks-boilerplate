import * as React from 'react'
import { useDispatch } from 'react-redux'

import { closeModal } from 'src/modules/modal'

import Button from 'src/components/atoms/common/Button'
import Img from 'src/components/molecules/common/ResponsiveImage'

import * as styles from 'src/components/molecules/Modal/Default/style.module.styl'

interface IProps {
  children?: React.ReactNode
  options?: {
    callback?: Function
  }
}

const Component: React.FC<IProps> = (props) => {
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeModal())
    props.options?.callback && props.options.callback()
  }

  return (
    <div className={styles.modal}>
      <p>Default</p>
      <button onClick={close}>Close</button>
    </div>
  )
}
export default Component
