import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as styles from 'src/components/organisms/Footer/style.module.styl'

const Component:React.FC = () => {
  return (
    <footer className={styles.footer}>
      <small>footer</small>
    </footer>
  )
}

export default Component
