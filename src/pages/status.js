import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import SEO from '../components/SEO'
import Moment from 'react-moment'
import styled from 'styled-components'

const DateItem = styled.span`
  color: var(--color-textSecondary);
  font-size: 0.8em;
`

const Statuspage = (props) => {
    const { title, description } = props.data.site.siteMetadata
    const lastBuildDate = props.data.currentBuildDate.currentDate

    return (
      <Layout location={props.location}>
        <SEO />
        <Hero title={title} subTitle={description} />

        <Wrapper>
          <h3>Latest successful news fetch cycle</h3>
          <div><DateItem><Moment fromNow>{lastBuildDate}</Moment></DateItem> | <DateItem><Moment>{lastBuildDate}</Moment></DateItem></div>
          <hr/>
          <h3>News Refresh Status</h3>
          <img src="https://github.com/devenkhatri/latest-crypto-news/actions/workflows/main.yml/badge.svg" alt="News Refresh Status"></img>
          <hr/>
          <h3>Build Status</h3>
          <img src="https://api.netlify.com/api/v1/badges/6b453288-3486-4c98-97da-250ee4dd22e8/deploy-status" alt="Build Status"></img>
          <hr/>
        </Wrapper>

        
      </Layout>
    );
}

export default Statuspage

export const pageQuery = graphql`
  query sitepageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    currentBuildDate {
      currentDate
    }
  }
`