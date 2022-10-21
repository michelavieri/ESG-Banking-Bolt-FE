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
import { ReactComponent as GreenLeaf } from '../assets/green-leaf.svg';
import CarbonLogo from '../assets/carbon-footprint.png';
import { ReactComponent as GreenRightArrow } from '../assets/rightarrow-green.svg';
import ChickenKFC from '../assets/kfc-chicken.png';
import KFCLogo from '../assets/kfc-logo.png';
import Promo1 from '../assets/promo1.png';
import Promo2 from '../assets/promo2.png';
import NFT1 from '../assets/nft1.png';

const GreenPage = styled.div`
  box-sizing: border-box;
  background-color: #F8F8F8;
  width: 100%;
  height: auto;
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

const Card = styled.div`
  border-radius: 14px;
  background-color: white;
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

      <ColumnFlex>
        <RowFlex style={{ padding: "12px 26px", marginTop:'25px'}}>
          <Title>Rewards</Title>
          <Subtitle onClick={() => navigate('/list-rewards')}>View All</Subtitle>
        </RowFlex>

        <Cards>
          <Card> 
            <ColumnFlex>
              <img src={ChickenKFC} alt="" height={72} />
              <RowFlex style={{marginLeft: 10, marginRight: 10}}>
                <p style={{fontSize: 10, fontWeight: 'bold'}} >20% Fried Chicken at KFC</p>
                <img src={KFCLogo} alt="" width={24} height={24} style={{marginTop: 10}} />
              </RowFlex>
              <Subtitle style={{marginLeft: 10, marginRight:10, marginTop:-3}}>Valid until: 31 Sept 22</Subtitle>
              <RowFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                <div>
                  <GreenLeaf/>
                  <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> 50 </span>
                </div>
                <div>
                  <span style={{fontSize: 12, textDecoration:'underline', color:'#5DB06C'}}>Redeem</span>
                </div>
              </RowFlex>
            </ColumnFlex>
          </Card>
          <Card> 
            <ColumnFlex>
              <img src={ChickenKFC} alt="" height={72} />
              <RowFlex style={{marginLeft: 10, marginRight: 10}}>
                <p style={{fontSize: 10, fontWeight: 'bold'}} >20% Fried Chicken at KFC</p>
                <img src={KFCLogo} alt="" width={24} height={24} style={{marginTop: 10}} />
              </RowFlex>
              <Subtitle style={{marginLeft: 10, marginRight:10, marginTop:-3}}>Valid until: 31 Sept 22</Subtitle>
              <RowFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                <div>
                  <GreenLeaf/>
                  <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> 50 </span>
                </div>
                <div>
                  <span style={{fontSize: 12, textDecoration:'underline', color:'#5DB06C'}}>Redeem</span>
                </div>
              </RowFlex>
            </ColumnFlex>
          </Card>
          <Card> 
            <ColumnFlex>
              <img src={ChickenKFC} alt="" height={72} />
              <RowFlex style={{marginLeft: 10, marginRight: 10}}>
                <p style={{fontSize: 10, fontWeight: 'bold'}} >20% Fried Chicken at KFC</p>
                <img src={KFCLogo} alt="" width={24} height={24} style={{marginTop: 10}} />
              </RowFlex>
              <Subtitle style={{marginLeft: 10, marginRight:10, marginTop:-3}}>Valid until: 31 Sept 22</Subtitle>
              <RowFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                <div>
                  <GreenLeaf/>
                  <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> 50 </span>
                </div>
                <div>
                  <span style={{fontSize: 12, textDecoration:'underline', color:'#5DB06C'}}>Redeem</span>
                </div>
              </RowFlex>
            </ColumnFlex>
          </Card>
        </Cards>
      </ColumnFlex>

      <ColumnFlex>
        <RowFlex style={{ padding: "12px 24px", marginTop:'25px'}}>
          <Title>Promotions</Title>
          <Subtitle>View All</Subtitle>
        </RowFlex>
        <Cards>
          <img src={Promo1} alt="" width={250} height={150}/>
          <img src={Promo2} alt="" width={250} height={150}/>
        </Cards>
      </ColumnFlex>

      <ColumnFlex style={{marginBottom: 20}}>
        <RowFlex style={{ padding: "12px 26px", marginTop:'25px'}}>
          <Title>NFTs</Title>
          <Subtitle>View All</Subtitle>
        </RowFlex>
        <Cards>
          <Card> 
              <ColumnFlex>
                <img src={NFT1} alt="" height={100} />
                <RowFlex style={{marginLeft: 10, marginRight: 10}}>
                  <p style={{fontSize: 10, fontWeight: 'bold'}} >Green APE BAYC Collection 2022</p>
                </RowFlex>
                <Subtitle style={{marginLeft: 10, marginRight:10, marginTop:-3}}>By: Rider Clips</Subtitle>
                <RowFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                  <div>
                    <GreenLeaf/>
                    <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> 50 </span>
                  </div>
                  <div>
                    <span style={{fontSize: 12, textDecoration:'underline', color:'#5DB06C'}}>More Info</span>
                  </div>
                </RowFlex>
              </ColumnFlex>
          </Card>
          <Card> 
              <ColumnFlex>
                <img src={NFT1} alt="" height={100} />
                <RowFlex style={{marginLeft: 10, marginRight: 10}}>
                  <p style={{fontSize: 10, fontWeight: 'bold'}} >Green APE BAYC Collection 2022</p>
                </RowFlex>
                <Subtitle style={{marginLeft: 10, marginRight:10, marginTop:-3}}>By: Rider Clips</Subtitle>
                <RowFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                  <div>
                    <GreenLeaf/>
                    <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> 50 </span>
                  </div>
                  <div>
                    <span style={{fontSize: 12, textDecoration:'underline', color:'#5DB06C'}}>More Info</span>
                  </div>
                </RowFlex>
              </ColumnFlex>
          </Card>
          <Card> 
              <ColumnFlex>
                <img src={NFT1} alt="" height={100} />
                <RowFlex style={{marginLeft: 10, marginRight: 10}}>
                  <p style={{fontSize: 10, fontWeight: 'bold'}} >Green APE BAYC Collection 2022</p>
                </RowFlex>
                <Subtitle style={{marginLeft: 10, marginRight:10, marginTop:-3}}>By: Rider Clips</Subtitle>
                <RowFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                  <div>
                    <GreenLeaf/>
                    <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> 50 </span>
                  </div>
                  <div>
                    <span style={{fontSize: 12, textDecoration:'underline', color:'#5DB06C'}}>More Info</span>
                  </div>
                </RowFlex>
              </ColumnFlex>
          </Card>
        </Cards>
      </ColumnFlex>
    </GreenPage>
  );
}

export default greenPage;