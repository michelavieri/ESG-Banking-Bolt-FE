import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {ReactComponent as BackButton} from '../assets/back-button.svg';
import ChickenKFC from '../assets/kfc-chicken.png';
import KFCLogo from '../assets/kfc-logo.png';
import { ReactComponent as GreenLeaf } from '../assets/green-leaf.svg';

const RewardsPage = styled.div`
  box-sizing: border-box;
  background-color: #F8F8F8;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
const Cards = styled.div`
  display: flex;
  padding: 0px 24px;
  gap: 8px;
  margin-top: 20px;
`
const Card = styled.div`
  border-radius: 14px;
  background-color: white;
  margin-left: 10px;
  margin-right: 5px;
  margin-top: 10px;
`
const Subtitle = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  color: #828282;
`

function listRewardsPage() {
    const navigate = useNavigate();
    return (
        <RewardsPage>
            <Header>
                <RowFlex>
                    <BackButton width = "16" height= "16" onClick={() => navigate('/green')}/>
                    <HeaderTitle>Green Page</HeaderTitle>
                </RowFlex>
            </Header>
            <Cards>
                <ColumnFlex>
                    <RowFlex>
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
                    </RowFlex>
                    <RowFlex>
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
                    </RowFlex>
                </ColumnFlex>
            </Cards>
        </RewardsPage>
    )
}

export default listRewardsPage;