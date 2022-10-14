import React from 'react';
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { ReactComponent as LandingPagePic } from "../assets/landing-page-pic.svg";
import ButtonBackground from "../assets/get-started-button-background.svg";

const GetStartedPage = styled.div`
  box-sizing: border-box;
  background-color: #0F244D;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 36px;
  justify-content: flex-end;
  padding: 24px;
`

const GetStartedButton = styled(Button)`
  width: 100%;
  height: 74px;
  border-radius: 14px !important;
  background-image: url(${ButtonBackground}) !important;
  margin-bottom: 10vh !important;
`

const Header = styled.p`
  color: white;
  font-weight:700;
  font-size: 48px;
  margin-block-start: 0;
  margin-block-end: 0;
`

const SubHeader = styled.p`
  color: white;
  font-weight: 600;
  font-size: 24px;
`

const Text = styled.p`
  color: white;
  font-weight: 400;
  font-size: 16px;
`

function landingPage({ setShowLanding }) {

  const handleGetStartedClick = () => {
    setShowLanding(false);
  }

  return (
    <GetStartedPage>
      <LandingPagePic style={{ width: '100%' }} />
      <div style={{ padding: "0px 28px" }}>
        <Header>SBD</Header>
        <SubHeader>Sustainable bank for sustainable future</SubHeader>
        <Text>Bank with us</Text>
      </div>
      <GetStartedButton color="primary" variant="contained"
        onClick={handleGetStartedClick}>
        Get Started
      </GetStartedButton>
    </GetStartedPage>
  );
}

export default landingPage;
