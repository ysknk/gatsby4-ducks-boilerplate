import React, { useEffect } from 'react'

import SEO from 'src/components/atoms/common/SEO'

const Page:React.FC = () => {
  useEffect(() => {
    // NOTE: mounted

    // NOTE: unmount
    return () => {}
  }, [])

  return (
    <>
      <SEO
        ogType="article"
      />
      <p>404</p>
    </>
  )
}

export default Page
