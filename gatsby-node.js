const { createFilePath } = require('gatsby-source-filesystem')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const BlogPostTemplate = require.resolve('./src/templates/blog-post.js')
  const BlogPostShareImage = require.resolve(
    './src/templates/blog-post-share-image.js'
  )
  const PageTemplate = require.resolve('./src/templates/page.js')
  const PostsBytagTemplate = require.resolve('./src/templates/tags.js')
  const ListPostsTemplate = require.resolve(
    './src/templates/blog-list-template.js'
  )

  const allMarkdownQuery = await graphql(`
    {
      allMarkdown: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { ne: false } } }
        limit: 1000
      ) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              title
              slug
              tags
              language
              cover {
                publicURL
              }
              unlisted
            }
            timeToRead
            excerpt
          }
        }
      }
    }
  `)

  if (allMarkdownQuery.errors) {
    reporter.panic(allMarkdownQuery.errors)
  }

  const postPerPageQuery = await graphql(`
    {
      site {
        siteMetadata {
          postsPerPage
        }
      }
    }
  `)

  const markdownFiles = allMarkdownQuery.data.allMarkdown.edges

  const posts = markdownFiles.filter(item =>
    item.node.fileAbsolutePath.includes('/content/posts/')
  )

  const listedPosts = posts.filter(
    item => item.node.frontmatter.unlisted !== true
  )

  // generate paginated post list
  const postsPerPage = postPerPageQuery.data.site.siteMetadata.postsPerPage
  const nbPages = Math.ceil(listedPosts.length / postsPerPage)

  Array.from({ length: nbPages }).forEach((_, i) => {
    createPage({
      //path: i === 0 ? `/` : `/pages/${i + 1}`,
      path: `/pages/${i + 1}`,
      component: ListPostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: nbPages,
      },
    })
  })

  // generate blog posts
  posts.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.frontmatter.slug,
      component: BlogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
      },
    })

    // generate post share images (dev only)
    if (process.env.gatsby_executing_command.includes('develop')) {
      createPage({
        path: `${post.node.frontmatter.slug}/image_share`,
        component: BlogPostShareImage,
        context: {
          slug: post.node.frontmatter.slug,
          width: 440,
          height: 220,
        },
      })
    }
  })

  // generate pages
  markdownFiles
    .filter(item => item.node.fileAbsolutePath.includes('/content/pages/'))
    .forEach(page => {
      createPage({
        path: page.node.frontmatter.slug,
        component: PageTemplate,
        context: {
          slug: page.node.frontmatter.slug,
        },
      })
    })

  // generate tag page
  markdownFiles
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
      []
    )
    .forEach(uniqTag => {
      createPage({
        path: `tags/${uniqTag}`,
        component: PostsBytagTemplate,
        context: {
          tag: uniqTag,
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type News implements Node {
      title: String
      author: String
      url: String
      urlToImage: String
      publishedAt: Date
      description: String
      content: String
    }
  `)
}

exports.sourceNodes = ({ actions: { createNode }, createNodeId, createContentDigest }) => {
  const axios = require('axios'); 
  const query = `cryptocurrency`;
  // axios.get(
  //   //`https://www.googleapis.com/customsearch/v1?key=AIzaSyAY7L4Hjlijw3UxQmH-4m2dyfUxoyt2YJ8&cx=017576662512468239146:omuauf_lfve&q=Cryptocurrency`
  //   `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}&pageSize=20&sortBy=publishedAt`
  // ).then((response)=>{    
    const NewsAPI = require('newsapi');
    const newsapi = new NewsAPI(process.env.NEWS_API_KEY);
    newsapi.v2.everything({
      q: query,
      pageSize: 20,
      language: 'en'
    }).then(response => {
    // console.log("*********** ",response)
    if (response.status == 'ok') {      
      const articles = response.articles;
      
      //now creating graphql nodes from the articles
      articles.map((article) => {
        const nodeContent = JSON.stringify(article);
        // console.log("+++++++++",nodeContent)
        const nodeMeta = {
          id: createNodeId(article.publishedAt),
          internal: {
            type: `News`,
            content: nodeContent,
            contentDigest: createContentDigest(article)
          },
        }
        const node = Object.assign({}, article, nodeMeta);
        createNode(node);
      });
    }
  }); //end of then
  
  
};