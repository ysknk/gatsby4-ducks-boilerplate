import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as styles from 'src/components/organisms/Header/style.module.styl'

const Component:React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>header</h1>
    </header>
  )
}

export default Component
