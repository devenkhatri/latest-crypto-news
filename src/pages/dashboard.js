import React from 'react'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Moment from 'react-moment'
import styled from 'styled-components'

const Heading = styled.h1`
  text-decoration: underline;
  color: var(--color-h2);
`

const DashWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`

const Box = styled.div`
  border-radius: 5px;
  word-wrap: break-word;
  background-color: var(--color-wrapperBackground);
  margin: 20px 10px 30px 10px;
  box-shadow: 0 0 0 0, 0 6px 12px var(--color-secondary);
`
const BoxTitle = styled.h2`
  padding: 5px 0px;
  background-color: var(--color-primaryAlpha);
  color: var(--color-secondary);
  text-align: center;  
`
const BoxAmount = styled.h2`
  padding: 5px 0px;
  background-color: var(--color-secondaryContentBackground);
  color: var(--color-textSecondary);
  text-align: center;  
`
const Data = styled.h2`
  padding: 20px 50px;  
  text-align: center;  
  &.up {
    color: var(--color-up);
  }
  &.down {
    color: var(--color-down);
  }
  & div {
    font-size: 1rem;
  }
`

const Dashboard = (props) => {
    return (
      <Layout location={props.location}>
        <SEO />
        <Wrapper style={{maxWidth: "830px"}}>
          <Heading>DayOnDay Deviation</Heading>
          <DashWrapper>
          <Box>
            <BoxTitle>Total</BoxTitle>
            <BoxAmount>1050.00</BoxAmount>
            <Data className="up">13.72 <div>(2.67%)</div></Data>
          </Box>
          <Box>
            <BoxTitle>Binance</BoxTitle>
            <BoxAmount>1050.00</BoxAmount>
            <Data className="up">13.72 <div>(2.67%)</div></Data>
          </Box>
          <Box>
            <BoxTitle>SwissBorg</BoxTitle>
            <BoxAmount>1050.00</BoxAmount>
            <Data className="up">13.72 <div>(2.67%)</div></Data>
          </Box>
          <Box>
            <BoxTitle>TrustWallet</BoxTitle>
            <BoxAmount>1050.00</BoxAmount>
            <Data className="up">13.72 <div>(2.67%)</div></Data>
          </Box>
          </DashWrapper>
        </Wrapper>
        <Wrapper style={{maxWidth: "830px"}}>
          <Heading>EntryOnEntry Deviation</Heading>
        </Wrapper>
      </Layout>
    );
}

export default Dashboard