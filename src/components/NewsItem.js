import React from 'react'
import { Link } from 'gatsby'
import TagList from './TagList'
import useSiteMetadata from '../hooks/use-site-config'
import styled from 'styled-components'
import { Bull, ReadingTime } from './Commons'
import Moment from 'react-moment'

const News = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`

const ReadNews = styled.a`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;
  color: var(--color-text);

  &:hover {
    background-color: var(--color-grey600);
    border-radius: 0.25rem;
    color: var(--color-white);
  }
`

const NewsHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const NewsTitleLink = styled.a`
  color: var(--color-h2);
  &:hover {
    border-bottom: 1px dotted var(--color-text);
  }
`

const FooterLine = styled.div`
  font-size: 0.8em;
`

const FooterLineItem = styled.span`
  text-transform: uppercase;
  color: var(--color-textSecondary);
`

const NewsItem = props => {
  const { news: { title, author, url, urlToImage, publishedAt, content } } = props

  return (
    <News>
      <img src={urlToImage} />
      <NewsHeader>
        <h2>
          <NewsTitleLink href={url} target="_blank">            
            {title}
          </NewsTitleLink>
        </h2>
      </NewsHeader>

      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: content }} />
      </section>

      <footer>
        <FooterLine>
          <FooterLineItem><Moment>{publishedAt}</Moment></FooterLineItem>
          <Bull />
          <FooterLineItem>{author}</FooterLineItem>
        </FooterLine>
        <ReadNews href={url} target="_blank" aria-label={`View ${title} article`}>
          Read News ›
        </ReadNews>
      </footer>
    </News>
  )
}
export default NewsItem
