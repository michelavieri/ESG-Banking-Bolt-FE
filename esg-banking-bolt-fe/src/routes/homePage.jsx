import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import { ReactComponent as NotifEnabled } from '../assets/notif-enabled.svg';
import Card1 from '../assets/card-1.png';
import Card2 from '../assets/card-2.png';
import History from '../assets/history.png';
import Investment from '../assets/investment.png';
import Topup from '../assets/topup.png';
import Transfer from '../assets/transfer.png';
import ScanPay from '../assets/scan-pay.png';
import Groceries from '../assets/groceries.png';
import Leisure from '../assets/leisure.png';
import Travel from '../assets/travel.png';
import Hawker from '../assets/hawker.png';
import Cosmetics from '../assets/cosmetics.png';
import Fairprice from '../assets/fairprice.png';
import McDonalds from '../assets/mcdonalds.png';
import ButtonBackground from '../assets/green-button-background.svg';
import { ReactComponent as Leaf } from '../assets/leaf.svg';
import { ReactComponent as ArrowRight } from '../assets/return-up-forward-outline.svg';

const HomePage = styled.div`
  box-sizing: border-box;
  background-color: #F8F8F8;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 12px 24px;
`

const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`

const RowFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Subtitle = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #828282;
`

const Title = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #0D0D0D;
  margin-block-start: 0;
  margin-block-end: 0;
`

const Cards = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 0px 24px;
  gap: 8px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

const GreenTokenButton = styled(Button)`
  background-color: #5DB06C !important;
  color: white !important;
  border-radius: 14px !important;
  margin: 0px 24px !important;
  background-image: url(${ButtonBackground}) !important;
  display: flex !important;
  justify-content: space-between !important;
`

const PayButton = styled(Button)`
  border: 0px;
  padding: 0px !important;
  min-width: 74px !important;
`

function homePage() {
  const navigate = useNavigate();

  return (
    <HomePage>
      <Header>
        <ColumnFlex>
          <Subtitle>
            Welcome back
          </Subtitle>
          <Title>
            John Doe
          </Title>
        </ColumnFlex>
        <NotifEnabled />
      </Header>

      <ColumnFlex>
        <Cards style={{ marginBottom: 16 }}>
          <img src={Card1} alt="" width={305} height={151} />
          <img src={Card2} alt="" width={305} height={151} />
        </Cards>
      </ColumnFlex>

      <ColumnFlex>
        <Cards style={{ marginBottom: 16 }}>
          <PayButton type="button" onClick={() => navigate('/payment')} onKeyDown={() => navigate('/payment')}>
            <img src={ScanPay} alt="" width={74} height={74} />
          </PayButton>
          <img src={Transfer} alt="" width={74} height={74} />
          <img src={Topup} alt="" width={74} height={74} />
          <img src={History} alt="" width={74} height={74} />
          <img src={Investment} alt="" width={74} height={74} />
        </Cards>
      </ColumnFlex>

      <GreenTokenButton variant="contained"
        onClick={() => navigate('/green')}>
        <RowFlex style={{ width: '100%' }}>
          <ColumnFlex style={{ margin: 8 }}>
            <p style={{
              marginBlockStart: 0,
              marginBlockEnd: 0,
              fontSize: '10pt'
            }}>
              Your Green Token Balance
            </p>
            <div style={{ display: 'flex', gap: "10px", alignItems: 'center' }}>
              <Leaf />
              <p style={{
                marginBlockStart: 0,
                marginBlockEnd: 0
              }}>
                2,340 points
              </p>
            </div>
          </ColumnFlex>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <p style={{ textDecoration: 'underline', fontWeight: '400', fontSize: '10pt' }}>
              See more
            </p>
            <ArrowRight />
          </div>
        </RowFlex>
      </GreenTokenButton>

      <ColumnFlex>
        <RowFlex style={{ padding: "12px 24px" }}>
          <Title>Budgets</Title>
          <Subtitle>Manage</Subtitle>
        </RowFlex>
        <Cards>
          <img src={Groceries} alt="" width={142} height={72} />
          <img src={Leisure} alt="" width={142} height={72} />
          <img src={Travel} alt="" width={142} height={72} />
        </Cards>
      </ColumnFlex>

      <ColumnFlex style={{ padding: "0px 24px" }}>
        <RowFlex style={{ padding: "28px 0px 12px 0px" }}>
          <Title>Transactions</Title>
          <Subtitle>See all</Subtitle>
        </RowFlex>
        <ColumnFlex style={{ gap: "12px" }}>
          <img src={Hawker} alt="" width={342} height={72} />
          <img src={Cosmetics} alt="" width={342} height={72} />
          <img src={Fairprice} alt="" width={342} height={72} />
          <img src={McDonalds} alt="" width={342} height={72} />
          <img src={Hawker} alt="" width={342} height={72} />
          <img src={Cosmetics} alt="" width={342} height={72} />
          <img src={Fairprice} alt="" width={342} height={72} />
          <img src={McDonalds} alt="" width={342} height={72} />
        </ColumnFlex>
      </ColumnFlex>
    </HomePage >
  );
}

export default homePage;
