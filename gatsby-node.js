const meta = require('./gatsby-meta')

// const { execSync } = require('child_process')
// const path = require('path')
// const fs = require('fs')

console.log(`env:【${meta.env}】`)

exports.onPostBuild = () => {
  // console.log('post build')
}

// Handling multiple layouts
// If you want to use different layouts for different pages, you can pass this information in the context of the pages you create, and then conditionally render in your layout file.

// In gatsby-node.js:

// exports.onCreatePage = ({ page, actions }) => {
//   const { createPage } = actions
//
//   if (page.path.match(/special-page/)) {
//     page.context.layout = "special"
//     createPage(page)
//   }
// }

// And then in src/layouts/index.js:

// export default ({ children, pageContext }) => {
//   if (pageContext.layout === "special") {
//     return <AlternativeLayout>{children}</AlternativeLayout>
//   }
//   return <RegularLayout>{children}</RegularLayout>
// }
