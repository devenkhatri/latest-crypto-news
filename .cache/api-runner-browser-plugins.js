module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx",".md"],"defaultLayouts":{"default":"/Users/a186148/99-Development/latest-crypto-news/src/templates/page.js"},"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":590,"linkImagesToOriginal":false,"withWebp":true}},{"resolve":"gatsby-remark-prismjs"},{"resolve":"gatsby-remark-responsive-iframe"},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"},{"resolve":"gatsby-remark-autolink-headers"}],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/a186148/99-Development/latest-crypto-news"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-morning-dew","short_name":"gatsby-starter-morning-dew","start_url":"/gatsby-starter-morning-dew","background_color":"#ffffff","theme_color":"#222222","display":"standalone","icon":"content/images/baymax.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"7b1a146906268ffe34d938dbc29af59d"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
