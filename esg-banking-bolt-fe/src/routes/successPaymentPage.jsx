import React from 'react'
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from '@material-ui/core';
import LeftArrow from '../assets/left-arrow.png';
import SuccessPayment from '../assets/success-payment.png';
import SushiTei from '../assets/sushitei.png';
import Money from '../assets/money.png';
import PaymentToken from '../assets/payment-token.png';


const PaymentPage = styled.div`
  box-sizing: border-box;
  background-color: #F8F8F8;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  padding: 24px 24px 12px 24px;
  width: 100%;
`
const BackButton = styled(Button)`
  border: 0px;
  padding: 0px !important;
  min-width: 24px !important;
`
const Title = styled.p`
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  line-height: 12px;
  color: black;
  align-self: center;
  text-align: center;
  width: 80%;
`
const Container =  styled.div`
  padding: 20px;
  color: #ffffff;
  border-radius: 15px;
  align-self: center;
  text-align: center;
`

const Text = styled.p`
  font-family: Inter;
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  align-self: center;
`
const RowFlex = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`
const ConfirmButton = styled.button`
  background-color: #4E83FA;
  color: white;
  border: 0px;
  border-radius: 15px;
  font-family: Inter;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  margin-top: 50px;
  padding: 10px 45px;
  align-self: center;
  width: 250px;
`

function successPaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <PaymentPage>
      <Header>
        <BackButton type="button" onClick={() => navigate('/')} onKeyDown={() => navigate('/')}>
          <img src={LeftArrow} alt="" width={24} height={24}/>
        </BackButton>
        <Title>
          Payment
        </Title>
      </Header>
      <Container>
        <img src={SuccessPayment} alt="" width={390} height={370}/>
      </Container>
      <img style={{ alignSelf: 'center' }} src={SushiTei} alt="" width={102} height={105}/>
      <RowFlex style={{ marginTop: '50px', width: '250px' }}>
        <img src={Money} alt="" width={32} height={32}/>
        <Text style={{ marginLeft: '15px', fontWeight: '600' }}> {location.state.amount} </Text>
      </RowFlex>
      <RowFlex style={{ width: '250px' }}>
        <Text style={{ marginRight: '5px' }}> Including donation of </Text>
        <Text style={{ marginRight: '5px', color: '#5DB06C' }}> {`SGD${location.state.donation}`} </Text>
      </RowFlex>
      <img src={PaymentToken} alt="" width={335} height={70} style={{ alignSelf: 'center', marginTop: '30px' }}/>
      <ConfirmButton type="button" onClick={() => navigate('/')}> RETURN </ConfirmButton>
    </PaymentPage>
  )
}

export default successPaymentPage