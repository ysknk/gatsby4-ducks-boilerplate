import * as React from 'react'
import { useDispatch } from 'react-redux'

import * as styles from 'src/components/atoms/common/Modal/style.module.styl'

import { closeModal } from 'src/modules/modal'

interface IProps {
  children?: React.ReactNode
}

const Component: React.FC<IProps> = (props) => {
  const dispatch = useDispatch()
  const close = () => {
    dispatch(closeModal())
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal_outer}>
        <div className={styles.modal_inner}>

          <div className={styles.modal_container}>
            <button className={styles.modal_close} onClick={close}>
              <span />
            </button>
            <div className={styles.modal_content}>
              {props.children}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Component
