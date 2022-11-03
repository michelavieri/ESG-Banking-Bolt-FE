import React from 'react'
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from '@material-ui/core';
import axios from 'axios';
import LeftArrow from '../assets/left-arrow.png';
import QrCode from '../assets/qrcode.png';


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
  background-color: #ffffff;
  border-radius: 15px;
  align-self: center;
  text-align: center;
`
const BoldText = styled.p`
  font-family: Inter;
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
  align-self: center;
  margin-top: 0px;
  margin-bottom: 5px;
`

const Text = styled.p`
  font-family: Inter;
  font-size: 10px;
  line-height: 12px;
  align-self: center;
  color: #828282;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 5px;
`
const RowFlex = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const ConfirmButton = styled.button`
  background-color: #5DB06C;
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

function useRewardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { reward } = location.state;
  console.log(reward.firestoreDoc);

  const confirm = () => {
    const req = {
      "username" : "user1",
      "rewardFirestoreDoc" : reward.firestoreDoc
    }
    axios.post(`http://localhost:4000/rewards/redeem`, {...req})
    .then(() => {
      navigate('/my-rewards');
    })
  }

  return (
    <PaymentPage>
      <Header>
        <BackButton type="button" onClick={() => navigate('/green')} onKeyDown={() => navigate('/')}>
          <img src={LeftArrow} alt="" width={24} height={24}/>
        </BackButton>
        <Title>
          Redeem Rewards
        </Title>
      </Header>
      <Container>
        <img src={QrCode} alt="" width={150} height={150}/>
        <RowFlex style={{ marginTop: '30px' }}>
          <ColumnFlex>
            <img src={reward.reward.logo} alt="" width={56} height={56} />
          </ColumnFlex>
          <ColumnFlex>
            <BoldText> Reward ID: <span style={{ fontWeight: 'normal' }}> {reward.reward.id} </span> </BoldText>
            <BoldText style={{ alignSelf: 'flex-start' }}> {reward.reward.vendor} </BoldText>
            <Text style={{ alignSelf: 'flex-start' }}> Valid until: 31 Sept 22 </Text>
          </ColumnFlex>
        </RowFlex>
        <ConfirmButton type="button" onClick={() => confirm()}> REDEEM </ConfirmButton>
        <Text style={{ marginTop: '15px' }}> {`Ask the staff to press the "Redeem" button`} </Text>
      </Container>
    </PaymentPage>
  )
}

export default useRewardPage;