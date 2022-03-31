import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Modal from 'src/components/molecules/Modal'
import Header from 'src/components/organisms/Header'
import Footer from 'src/components/organisms/Footer'

import { setMedia } from 'src/modules/device'
import { useMedia } from 'src/uses/media'

import * as styles from 'src/components/templates/layouts/Default/style.module.styl'

const media = useMedia()

interface IProps {
  children?: React.ReactNode
}

const isTouch = () => {
  if ((navigator as any).msPointerEnabled) {
    return true
  } else {
    if ('ontouchstart' in window) {
      return true
    }
    if ('onmousedown' in window) {
      return false
    }
  }
}

const Component:React.FC<IProps> = ({ children }) => {
  const dispatch = useDispatch()

  // NOTE: mounted once
  useEffect(() => {
    const html = document.documentElement
    if (isTouch()) {
      html.classList.add('device-use-touch')
    } else {
      html.classList.add('device-use-mouse')
    }

    let isSP:boolean|null = null
    const func = (e:any) => {
      if (e.matches !== isSP) {
        dispatch(setMedia(e.matches))
      }
      isSP = e.matches
    }
    (media.sp as any).addListener(func)
    return () => {
      (media.sp as any).removeListener(func)
    }
  })

  // NOTE: mounted always
  useEffect(() => {
    dispatch(setMedia((media.sp as any).matches))
  }, [])

  return (
    <div id="app">
      <div id="wrapper">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Modal />
      </div>
    </div>
  )
}

export default Component
