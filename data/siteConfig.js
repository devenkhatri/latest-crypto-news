module.exports = {
  siteTitle: 'Latest Crypto News',
  siteDescription: 'News articles are fetched and refreshed every hour',
  authorName: 'Deven Goratela',
  twitterUsername: '',
  authorAvatar: 'avatar.jpg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  For the last decade, Maxence Poutord has worked with a variety of web technologies. He is currently focused on front-end development.
  On his day to day job, he is working as a senior front-end engineer at VSware. He is also an occasional tech speaker and a mentor.
  As a digital nomad, he is living where the WiFi and sun are 😎 <br>
  Do you want to know more? <a href="https://www.maxpou.fr/about" rel="noopener" target="_blank">Visit my website!</a>
  `,
  siteUrl: 'https://latest-crypto-news.netlify.app/',
  disqusSiteUrl: 'https://www.maxpou.fr/',
  disqusShortname: 'maxpou',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'crypto-banner.jpg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/crypto-icon-dark.png',
  postsPerPage: 6,
  headerTitle: 'Latest Crypto News',
  headerLinksIcon: 'crypto-icon.png', //  (leave empty to disable: '')
  headerLinks: [
    // {
    //   label: 'Blog',
    //   url: '/pages/1',
    // },
    // {
    //   label: 'About',
    //   url: '/about-gatsby-starter-morning-dew',
    // },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'Netlify',
    url: 'https://netlify.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        // {
        //   label: 'Blog',
        //   url: '/',
        // },
        // {
        //   label: 'About',
        //   url: '/about-gatsby-starter-morning-dew',
        // },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/devenkhatri/latest-crypto-news',
          rel: 'external',
        },
        {
          label: 'Website',
          url: 'https://latest-crypto-news.netlify.app',
          rel: 'external',
        },
        // {
        //   label: 'Twitter',
        //   url: 'https://twitter.com/_maxpou',
        //   rel: 'external',
        // },
      ],
    },
  ],
}
