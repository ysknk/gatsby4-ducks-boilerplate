import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface IProps {
  bodyClass?: string

  viewport?: string
  formatDetection?: string
  lang?: string
  title?: string
  description?: string
  url?: string

  ogLocale?: string
  ogTitle?: string
  ogType?: 'website' | 'article'
  ogDescription?: string
  ogUrl?: string
  ogrImage?: string

  twitterCard?: 'summary' | 'summary_large_image'
}

const Component:React.FC<IProps> = (props) => {
  const { site } = useStaticQuery<GatsbyTypes.LayoutTemplateQuery>(
    graphql`
      query LayoutTemplate {
        site {
          siteMetadata {
            bodyClass
            viewport
            formatDetection
            lang
            title
            description
            keywords
            url
            ogLocale
            ogTitle
            ogType
            ogDescription
            ogUrl
            ogImage
            twitterCard
          }
        }
      }
    `
  )

  const siteMetadata = site?.siteMetadata

  const data = (key: any) => {
    return (props as any)[key]
      || (siteMetadata && (siteMetadata as any)[key])
      || undefined
  }

  const bodyClass = data('bodyClass')
    ? 'l_page l_page__' + data('bodyClass')
    : ''

  // const rootPath = process.env.ROOT_PATH || ''

  const viewport = data('viewport')
  const formatDetection = data('formatDetection')
  const lang = data('lang')

  const title = (props.title ? props.title + ' - ' : '') + siteMetadata?.title
  const description = data('description')
  const keywords = data('keywords')
  const url = siteMetadata?.url + (props.url ? props.url : '')

  const ogTitle = data('ogTitle')
  const ogType = data('ogType')
  const ogLocale = data('ogLocale')
  const ogDescription = data('ogDescription')
  const ogUrl = siteMetadata?.url + (props.ogUrl ? props.ogUrl : '')
  const ogImage = data('ogImage') ? siteMetadata?.url + data('ogImage') : ''

  const twitterCard = data('twitterCard')

  const meta = [
    { name: 'viewport', content: viewport },
    { name: 'description', content: description },
    { name: 'keywords', content: keywords },
    { name: 'format-detection', content: formatDetection },
    { property: 'og:type', content: ogType },
    { property: 'og:title', content: ogTitle || title },
    { property: 'og:description', content: ogDescription || description },
    { property: 'og:url', content: ogUrl },
    { property: 'og:locale', content: ogLocale },
    { name: 'twitter:card', content: twitterCard }
  ]
  if (ogImage) {
    meta.push({ property: 'og:image', content: ogImage })
  }

  return (
    <Helmet
      defer={false}
      htmlAttributes={{ lang }}
      bodyAttributes={{ class: bodyClass }}
      link={[
        { rel: 'canonical', href: url },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&display=swap' }
      ]}
      title={title}

      meta={meta}
    >
      <script type="text/javascript">{`
        // console.log('inline script')
      `}</script>
    </Helmet>
  )
}

export default Component
