const nextMDX = require('@zeit/next-mdx')
const rehypePrism = require('@mapbox/rehype-prism')

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
  options: {
    hastPlugins: [rehypePrism]
  }
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx']
})