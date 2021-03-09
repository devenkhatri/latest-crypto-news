var plugins = [{
      name: 'gatsby-plugin-mdx',
      plugin: require('/Users/a186148/99-Development/latest-crypto-news/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"/Users/a186148/99-Development/latest-crypto-news/src/templates/page.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":590,"linkImagesToOriginal":false,"withWebp":true}},{"resolve":"gatsby-remark-prismjs"},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"},{"resolve":"gatsby-remark-autolink-headers"}],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/a186148/99-Development/latest-crypto-news"},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/Users/a186148/99-Development/latest-crypto-news/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/Users/a186148/99-Development/latest-crypto-news/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/a186148/99-Development/latest-crypto-news/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/a186148/99-Development/latest-crypto-news/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-morning-dew","short_name":"gatsby-starter-morning-dew","start_url":"/gatsby-starter-morning-dew","background_color":"#ffffff","theme_color":"#222222","display":"standalone","icon":"content/images/baymax.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"7b1a146906268ffe34d938dbc29af59d"},
    },{
      name: 'default-site-plugin',
      plugin: require('/Users/a186148/99-Development/latest-crypto-news/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
