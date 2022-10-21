import React, {useState, useCallback} from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import LeftArrow from '../assets/left-arrow.png';
import QrCode from '../assets/qrcode.png';
import Leaf from '../assets/leaf-green.png';
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
const Input = styled.input`
  font-family: Inter;
  font-size: 12px;
  line-height: 12px;
  background-color: #F8F8F8;
  align-self: flex-start;
  border: 0;
  width:100%;
`
const Text = styled.p`
  font-family: Inter;
  font-size: 12px;
  line-height: 12px;
  font-weight: bold;
  align-self: center;
`
const GreenText = styled.p`
  font-family: Inter;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #5DB06C;
  word-wrap: break-word;
  width: 310px;
  text-align: center;
  align-self: center;
  margin-top: 200px;
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
const Line = styled.hr`
  width: 275px;
  height: 1px;
  color: #828282;
  background-color: #828282;
  border-width: 0px;
`
const DonationButton = styled.button`
  background-color: #828282;
  color: white;
  border: 0px;
  border-radius: 15px;
  font-family: Inter;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px 10px;
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

function confirmPaymentPage() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [donate, setDonate] = useState("");

  const addDonation = useCallback((donation) => {
    setButton1(false);
    setButton2(false);
    setButton3(false);

    let newAmount = "";

    if (donation === 0.1) {
      if(button1) {
        setButton1(false);
        newAmount = `$${(parseFloat(amount.substr(1), 10) - 0.1).toString()}`;
      } else {
        setButton1(true);
        newAmount = `$${(parseInt(amount.substr(1), 10) + 0.1).toString()}`;
      }
    } else if (donation === 0.2) {
      if(button2) {
        setButton2(false);
        newAmount = `$${(parseFloat(amount.substr(1), 10) - 0.2).toString()}`;
      } else {
        setButton2(true);
        newAmount = `$${(parseInt(amount.substr(1), 10) + 0.2).toString()}`;
      }
    } else if (donation === 0.3) {
      if(button3) {
        setButton3(false);
        newAmount = `$${(parseFloat(amount.substr(1), 10) - 0.3).toString()}`;
      } else {
        setButton3(true);
        newAmount = `$${(parseInt(amount.substr(1), 10) + 0.3).toString()}`;
      }
    } else {
      newAmount = amount
    }

    setAmount(newAmount);
    setDonate(donation);
  }, [amount, button1, button2, button3]);

  const confirm = () => {
    navigate('/success-payment', {
      state: {
        'amount': amount,
        'donation': donate
      }
    })
  }

  return (
    <PaymentPage>
      <Header>
        <BackButton type="button" onClick={() => navigate('/payment')} onKeyDown={() => navigate('/')}>
          <img src={LeftArrow} alt="" width={24} height={24}/>
        </BackButton>
        <Title>
          Payment
        </Title>
      </Header>
      <Container>
        <img src={QrCode} alt="" width={224} height={224}/>
      </Container>
      <img style={{ alignSelf: 'center' }} src={SushiTei} alt="" width={102} height={105}/>
      <RowFlex style={{ marginTop: '50px', width: '300px' }}>
        <img src={Money} alt="" width={32} height={32}/>
        <ColumnFlex>
          <Input type="text" value={amount} onChange={(e) => {
            const input = e.target.value;
            const prefix = "$";
            e.target.value = prefix + input.substr(prefix.length);
            setAmount(e.target.value);
          }} placeholder="Amount"/>
          <Line />
        </ColumnFlex>
      </RowFlex>
      {amount === "" ? (
        <>
          <GreenText> Pay with SBD Pay at selected merchants to earn green tokens </GreenText>
          <RowFlex style={{ width: '115px', justifyContent: 'center' }}>
            <img src={Leaf} alt="" width={18} height={13}/>
            <img src={Leaf} alt="" width={18} height={13}/>
            <img src={Leaf} alt="" width={18} height={13}/>
          </RowFlex>
        </>
      ) : (
        <>
          <RowFlex style={{ marginTop: '20px' }}>
            <Text style={{ marginRight: '5px' }}> Donate: </Text>
            <DonationButton type="button" value={0.1} style={{ backgroundColor: button1 ? '#5DB06C' : '#828282'}} onClick={() => addDonation(0.1)} > $0.10 </DonationButton>
            <DonationButton type="button" value={0.2} style={{ backgroundColor: button2 ? '#5DB06C' : '#828282'}} onClick={() => addDonation(0.2)} > $0.20 </DonationButton>
            <DonationButton type="button" value={0.3} style={{ backgroundColor: button3 ? '#5DB06C' : '#828282'}} onClick={() => addDonation(0.3)} > $0.30 </DonationButton>
          </RowFlex>
          <Text style={{ color: '#828282', marginTop: '15px' }}> This donation is for the tree donation movement </Text>
          <img src={PaymentToken} alt="" width={335} height={70} style={{ alignSelf: 'center', marginTop: '30px' }}/>
          <ConfirmButton type="button" onClick={() => confirm()}> {`CONFIRM - SGD${amount}`} </ConfirmButton>
        </>
      )}
    </PaymentPage>
  )
}

export default confirmPaymentPage