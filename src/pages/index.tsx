import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IInitialState } from 'src/store/state'

import { openModal } from 'src/modules/modal'

import SEO from 'src/components/atoms/common/SEO'
import Img from 'src/components/molecules/common/ResponsiveImage'

const Page:React.FC = () => {
  const state = useSelector((state:IInitialState) => state)
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(openModal({type: 'default'}))
  }

  useEffect(() => {
    // NOTE: mounted

    // NOTE: unmount
    return () => {}
  }, [])

  return (
    <>
      <SEO
        ogType="website"
      />
      <p>Index</p>
      <button onClick={ clickHandler }>open modal</button>
      <Img pc-src="pc" sp-src="sp" alt="" />
    </>
  )
}

export default Page
