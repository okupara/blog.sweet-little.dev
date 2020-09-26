// eslint-disable-next-line
const path = require("path")

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        defaultLoaders.babel,
        "@mdx-js/loader",
        path.join(__dirname, "./src/lib/fm-loader"),
      ],
    })
    // Important: return the modified config
    return config
  },
}
