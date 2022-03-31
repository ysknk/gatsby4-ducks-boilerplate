const title = 'title'
const description = 'description'
const keywords = 'keywords'

const pathPrefix = ['']
const url = `https://example.com/${pathPrefix.length ? pathPrefix.join('/') + '/' : ''}`

const env = process.env.GATSBY_ACTIVE_ENV
  || process.env.NODE_ENV
  || 'development'

module.exports = {
  env,

  // tire-cp/ai/content
  pathPrefix,

  siteMetadata: {
    siteUrl: url,
    title,
    bodyClass: 'common',
    lang: 'ja',
    viewport: 'width=device-width,initial-scale=1,shrink-to-fit=no,user-scalable=no',
    formatDetection: 'telephone=no',
    description,
    keywords,
    url,
    ogLocale: 'ja_JP',
    ogTitle: '',
    ogDescription: description,
    ogType: 'article',
    ogUrl: url,
    ogImage: 'assets/img/common/og_img_1.png',
    twitterCard: 'summary_large_image'
  }
}
