import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from '@material-ui/core';
import GreenTree from '../assets/tree-greenpage.png';
import SkyBg from '../assets/sky-sv.svg';
import ButtonBackground from '../assets/green-button-background.svg';
import {ReactComponent as BackButton} from '../assets/back-button.svg';
import { ReactComponent as ArrowRight } from '../assets/return-up-forward-outline.svg';
import { ReactComponent as Leaf } from '../assets/leaf.svg';
import CarbonLogo from '../assets/carbon-footprint.png';
import { ReactComponent as GreenRightArrow } from '../assets/rightarrow-green.svg';


const GreenPage = styled.div`
  box-sizing: border-box;
  background-color: #F8F8F8;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const TreeSection = styled.div`
  background-image: url(${SkyBg});
  display: flex;
  justify-content: space-between;
  height: 20%;
  padding-left: 30px;
  padding-right: 24px;
  padding-top: 30px;
`
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`
const RowFlex = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-left:130px;
  position: absolute;

`
const Tree = styled.div`
  align-items: center;
  margin-top: 15px;
  margin-left: 25px;
  margin-right: 15px;  
`

const TreeProgress = styled.div`
  margin-top:20px;
`

const Subtext = styled.p`
  font-size: 10px;
  color: #828282;
  font-weight: bold;
`

const Score = styled.p`
  font-size: 14px;  
  font-weight: bold;
`

const GrowButton = styled(Button)`
  background-color: #367040 !important;
  color: white !important;
  font-size:10px;
  text-decoration: underline !important;
  border-radius: 14px !important;
  display: flex !important;
  justify-content: space-between !important;
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

const CarbonButton = styled(Button)`
  background-color: white !important;
  color: black !important;
  border-radius: 14px !important;
  margin: 0px 24px !important;
  background-image: url(${ButtonBackground}) !important;
  background-size:100% 100%;
  display: flex !important;
  justify-content: space-between !important;
`

function greenPage() {
  const navigate = useNavigate();
  return (
    <GreenPage>
      <TreeSection>
        <ColumnFlex>
          <RowFlex>
            <BackButton width = "16" height= "16" onClick={() => navigate('/')}/>
            <HeaderTitle>Green Page</HeaderTitle>
          </RowFlex>
          <RowFlex>
            <Tree><img src={GreenTree} alt=""/></Tree>
            <TreeProgress>
              <Subtext>Your Tree Progress:</Subtext>
              <Score>12/100%</Score>
              <GrowButton variant='contained' style={{textTransform: 'none'}} onClick={() => navigate('/tree')}>
                Grow your Tree
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <ArrowRight />
                </div>
              </GrowButton>
            </TreeProgress>
          </RowFlex>
        </ColumnFlex>
      </TreeSection>

      <GreenTokenButton variant="contained"
        onClick={() => navigate('/green')} style={{textTransform: 'none'}}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
            <p style={{fontWeight: 'bold', fontSize: '10pt' }}>
             My Rewards
            </p>
            <ArrowRight />
          </div>
        </RowFlex>
      </GreenTokenButton>

      <br/>

      <CarbonButton variant="contained" onClick={() => navigate('/green')} style={{textTransform: 'none'}}>
        <RowFlex style={{ width: '100%' }}>
        <ColumnFlex style={{ margin: 8 }}>
            <p style={{
              marginBlockStart: 0,
              marginBlockEnd: 0,
              fontSize: '10pt',
              color:'#5DB06C  ',
              
            }}>
              Your Carbon Footprint:
            </p>
            
            <div style={{ display: 'flex', gap: "5px", alignItems: 'center' }}>
              <img src={CarbonLogo} alt="" />
              <ColumnFlex>
                <RowFlex>
                  <p style={{
                    marginBlockStart: 0,
                    marginBlockEnd: 0,
                    fontSize: '14pt',
                    fontWeight: 'bold',
                  }}>
                    16.3
                  </p>
                  <p style={{
                      marginBlockStart: 0,
                      marginBlockEnd: 0,
                      fontSize: '10pt',
                      alignItems: 'baseline',
                      marginTop: '8px',
                      marginLeft: '5px'
                    }}>
                    tons CO2
                  </p>
                  </RowFlex>
                  <p style={{
                      marginBlockStart: 0,
                      marginBlockEnd: 0,
                      fontSize: '10pt',
                      alignItems: 'baseline',
                      marginTop: '0px',
                      marginLeft: ' 0px'
                    }}>
                    September 2022
                  </p>
                </ColumnFlex>
              </div>
          </ColumnFlex>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <p style={{fontWeight: 'bold', fontSize: '10pt',color:'#5DB06C'}}>
             View Analytics
            </p>
            <GreenRightArrow />
          </div>  
        </RowFlex>
      </CarbonButton>
    </GreenPage>
  );
}

export default greenPage;