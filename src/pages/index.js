import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import NewsItem from '../components/NewsItem'
import SEO from '../components/SEO'

const Homepage = (props) => {
    const { title, description } = props.data.site.siteMetadata
    const allNews = props.data.news.edges

    return (
      <Layout location={props.location}>
        <SEO />
        <Hero title={title} subTitle={description} />

        <Wrapper>
          {allNews && allNews.map(({node}, index)=>(
              <NewsItem key={index} news={node}/>
          ))}
        </Wrapper>

        
      </Layout>
    );
}

export default Homepage

export const pageQuery = graphql`
  query homepageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    news: allNews {
        edges {
          node {
            title
            author
            url
            urlToImage
            publishedAt
            description
            content
          }
        }
      }
  }
`