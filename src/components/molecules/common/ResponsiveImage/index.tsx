import * as React from 'react'
import * as styles from 'src/components/molecules/common/ResponsiveImage/style.module.styl'
import Img from 'src/components/atoms/common/Image'

interface IProps {
  className?: string
  src?: string
  'pc-src'?: string
  'sp-src'?: string
  alt?: string
}

const Component: React.FC<IProps> = (props) => {
  if (props.src) {
    return (
      <span className={`${styles.img} ${styles['img__' + props.className] || ''}`}>
        <Img src={props.src} alt={props.alt} />
      </span>
    )
  }

  if (!props['sp-src'] && props['pc-src']) {
    return (
      <span className={`${styles.img} ${styles['img__' + props.className] || ''}`}>
        <Img src={props['pc-src']} alt={props.alt} />
      </span>
    )
  }

  return (
    <span className={`${styles.img} ${styles['img__' + props.className] || ''}`}>
      <Img className="display-none--pc" src={(props as any)['sp-src']} alt={props.alt} />
      <Img className="display-none--sp" src={(props as any)['pc-src']} alt={props.alt} />
    </span>
  )
}

export default Component
