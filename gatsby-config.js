const meta = require('./gatsby-meta')
const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${meta.env}`
})

module.exports = {
  pathPrefix: meta.pathPrefix
    ? `/${meta.pathPrefix.join('/')}`
    : '',
  siteMetadata: meta.siteMetadata,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'long name',
    //     short_name: 's name',
    //     start_url: '/',
    //     background_color: '#fff',
    //     theme_color: '#000',
    //     display: 'minimal-ui',
    //     icon: 'src/images/common/icon_1.png', // This path is relative to the root of the site.
    //     icon_options: {
    //       purpose: 'any maskable'
    //     },
    //     crossOrigin: 'use-credentials',
    //     cache_busting_mode: 'query'
    //   }
    // },
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        checkSupportedExtensions: false
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },

    // ---
    //
    // NOTE: ↓↓CUSTOM↓↓
    //
    // ---
    'gatsby-plugin-root-import',
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: process.env.GTM_ID
    //   }
    // },
    'gatsby-plugin-typescript',

    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/__generated__/gatsby-types.d.ts'
      }
    },

    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/templates/layouts/Default/index.tsx')
      }
    },
    'gatsby-plugin-stylus',

    {
      resolve: 'gatsby-plugin-react-redux',
      options: {
        pathToCreateStoreModule: './src/store/create',
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
          ignoreFunction: true
        },
        cleanupOnClient: true,
        windowKey: '__PRELOADED_STATE__'
      }
    }

  ]
}
