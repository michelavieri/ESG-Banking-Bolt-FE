import React, { useState } from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import { QrReader } from 'react-qr-reader';
import LeftArrow from '../assets/left-arrow.png';
import Flashlight from '../assets/flashlight.png';
import Leaf from '../assets/leaf-green.png';


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
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 12px 24px;
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
`

const Webcam =  styled.div`
  padding: 10px;
  background-color: "#DEDEDE";
  border: 0px;
  border-radius: 15px;
`

const Text = styled.p`
  font-family: Inter;
  font-size: 12px;
  line-height: 12px;
  color: black;
  word-wrap: break-word;
  width: 310px;
  text-align: center;
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
  justify-content: space-between;
  width: 115px;
`

function paymentPage() {
  const navigate = useNavigate();
  const [scanResultWebCam, setScanResultWebCam] = useState("Scanning");

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }

    if(result !== 'Scanning') {
      navigate('/confirm-payment');
    }
  }

  return (
    <PaymentPage>
      <Header>
        <BackButton type="button" onClick={() => navigate('/')} onKeyDown={() => navigate('/')}>
          <img src={LeftArrow} alt="" width={24} height={24}/>
        </BackButton>
        <Title>
          Scan QR Code
        </Title>
        <img src={Flashlight} alt="" width={24} height={24}/>
      </Header>
      <Webcam>
        <QrReader
          scanDelay={300}
          videoStyle={{width: '100%', borderRadius: '15px'}}
          onResult={(result, error) => {
            if (result) {
              handleScanWebCam(result);
            }

            if (error) {
              if (scanResultWebCam !== 'Scanning') {
                handleScanWebCam(scanResultWebCam);
              } else {
                handleScanWebCam('Scanning');
              }
            }
          }}
        />
      </Webcam>
      {scanResultWebCam !== 'Scanning' ? (
        <div>
          <Title style={{ textAlign: 'center' }}> Scanned: </Title>
          <Text> {scanResultWebCam.text} </Text>
        </div>
      ) : (
        <Title style={{ textAlign: 'center' }}> Scanning... </Title>
      )}
      <GreenText> Pay with SBD Pay at selected merchants to earn green tokens </GreenText>
      <RowFlex>
        <img src={Leaf} alt="" width={18} height={13}/>
        <img src={Leaf} alt="" width={18} height={13}/>
        <img src={Leaf} alt="" width={18} height={13}/>
      </RowFlex>
    </PaymentPage>
  )
}

export default paymentPage