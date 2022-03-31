import * as React from 'react'
import * as styles from 'src/components/atoms/common/Image/style.module.styl'
import { StaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

interface IProps {
  className?: string
  src: string
  alt?: string
}

const Component:React.FC<IProps> = (props) => (
  <StaticQuery
    query = {graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
              }
              publicURL
            }
          }
        }
      }
    `}

    render = {(data) => {
      const image = data.images.edges.find((n: any) => {
        return n.node.relativePath.includes(props.src)
      })
      const imageFull = image?.node?.childImageSharp
        && image.node.childImageSharp
      const staticURL = props.src
      const publicURL = image?.node?.publicURL

      return (
        <span className={`${styles.img} ${props.className || ''} ${styles['img__' + props.className] || ''}`}>
          {
            imageFull
              ? <GatsbyImage image={imageFull.gatsbyImageData} alt={props?.alt || ''} />
              : <img src={publicURL || staticURL} alt={props.alt} />
          }
        </span>
      )
    }}
  / >
)

export default Component
