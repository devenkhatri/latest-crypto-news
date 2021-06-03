import React from 'react'
import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Moment from 'react-moment'
import moment from 'moment'
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

  // console.log("******* process.env.GATSBY_AIRTABLE_API_KEY",process.env.GATSBY_AIRTABLE_API_KEY)
  var Airtable = require('airtable');
  var base = new Airtable({apiKey: process.env.GATSBY_AIRTABLE_API_KEY}).base('appARM4wlkiCLYVKH');

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    base('Tracking').select({
      maxRecords: 2,
      view: "Grid view",
      sort: [{field: "SrNo", direction: "desc"}]
    }).eachPage(function page(records, fetchNextPage) {
      let currentData = {}
      let previousData = {}
      let first = true;
      records.forEach(function (record) {        
        // const recordDate = record.get('RecordDate');
        // const recordDateOnly = moment(recordDate).format('YYYY-MM-DD')
        // console.log('Retrieved', record.get('SrNo'),record.get('Total'));
        if (first) {
          currentData = {
            total: record.get('Total'),
            binance: record.get('Binance-Spot')+record.get('Binance-Earn'),
            swissborg: record.get('SwissBorg'),
            trustwallet: record.get('TrustWallet'),
          }
          first = false;
        } else {
          previousData = {
            total: record.get('Total'),
            binance: record.get('Binance-Spot')+record.get('Binance-Earn'),
            swissborg: record.get('SwissBorg'),
            trustwallet: record.get('TrustWallet'),
          }
        }
      });
      setData({
        total: {
          current: currentData.total, 
          diffAmount: (currentData.total - previousData.total).toFixed(2),
          percent: ((currentData.total - previousData.total)*100/previousData.total).toFixed(2),
        },
        binance: {
          current: currentData.binance, 
          diffAmount: (currentData.binance - previousData.binance).toFixed(2),
          percent: ((currentData.binance - previousData.binance)*100/previousData.binance).toFixed(2),
        },
        swissborg: {
          current: currentData.swissborg, 
          diffAmount: (currentData.swissborg - previousData.swissborg).toFixed(2),
          percent: ((currentData.swissborg - previousData.swissborg)*100/previousData.swissborg).toFixed(2),
        },
        trustwallet: {
          current: currentData.trustwallet, 
          diffAmount: (currentData.trustwallet - previousData.trustwallet).toFixed(2),
          percent: ((currentData.trustwallet - previousData.trustwallet)*100/previousData.trustwallet).toFixed(2),
        },
      })
      fetchNextPage();
    }, function done(err) {
      if (err) { console.error(err); return; }
    });
  }, []);
  

    return (
      <Layout location={props.location}>
        <SEO />
        <Wrapper style={{maxWidth: "830px"}}>
          <Heading>DayOnDay Deviation</Heading>
          <DashWrapper>
          <Box>
            <BoxTitle>Total</BoxTitle>
            <BoxAmount>{data && data.total.current}</BoxAmount>
            <Data className={data && data.total.diffAmount>0?'up':'down'}>{data && data.total.diffAmount} <div>({data && data.total.percent}%)</div></Data>
          </Box>
          <Box>
            <BoxTitle>Binance</BoxTitle>
            <BoxAmount>{data && data.binance.current}</BoxAmount>
            <Data className={data && data.binance.diffAmount>0?'up':'down'}>{data && data.binance.diffAmount} <div>({data && data.binance.percent}%)</div></Data>
          </Box>
          <Box>
            <BoxTitle>SwissBorg</BoxTitle>
            <BoxAmount>{data && data.swissborg.current}</BoxAmount>
            <Data className={data && data.swissborg.diffAmount>0?'up':'down'}>{data && data.swissborg.diffAmount} <div>({data && data.swissborg.percent}%)</div></Data>
          </Box>
          <Box>
            <BoxTitle>TrustWallet</BoxTitle>
            <BoxAmount>{data && data.trustwallet.current}</BoxAmount>
            <Data className={data && data.trustwallet.diffAmount>0?'up':'down'}>{data && data.trustwallet.diffAmount} <div>({data && data.trustwallet.percent}%)</div></Data>
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