import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {ReactComponent as BackButton} from '../assets/back-button.svg';
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
  padding: 24px 24px 12px 24px;
  width: 100%;
`
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
`

const RowFlex = styled.div`
  display: flex;
  justify-content: space-between;
`
const HeaderText = styled.p`
  font-family: Inter;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  margin: 0px;
  text-align: center;
  line-height: 3;
`
const HeaderCapsule = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
`

const HeaderCapsuleCurrent = styled.button`
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  height: 30px;
  width: 100px;
  border: 0px;
`
const HeaderCapsulePast = styled.button`
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 30px;
  width: 100px;
  border: 0px;
`
const Line = styled.hr`
  width: 2px;
  height: 30px;
  color: #828282;
  background-color: #828282;
  border-width: 0px;
  margin: 0;
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
const UseNow = styled.button`
  background-color: transparent;
  border: 0px;
`

function myRewardsPage() {
    const navigate = useNavigate();
    const [currRewards, setCurrRewards] = useState([]);
    const [pastRewards, setPastRewards] = useState([]);
    const [currState, setCurrState] = useState("current");

    useEffect(() => {
      axios.get(`http://localhost:4000/rewards/retrieveUsers/user1`)
      .then(res => {
        res.data.forEach((reward) => {
          if (reward.reward.redeemed) {
            console.log(reward);
            setPastRewards([...pastRewards, reward]);
          } else {
            setCurrRewards([...currRewards, reward]);
          }
        })
      })
    }, []);

    return (
        <RewardsPage>
            <Header>
              <BackButton style={{ alignSelf: 'center' }} width = "16" height= "16" onClick={() => navigate('/green')}/>
              <HeaderCapsule>
                <HeaderCapsuleCurrent style={{ backgroundColor: currState === "current" ? '#5DB06C' : 'white'}} onClick={() => setCurrState("current")}>
                  <HeaderText>
                    Current Rewards
                  </HeaderText>
                </HeaderCapsuleCurrent>
                <Line />
                <HeaderCapsulePast style={{ backgroundColor: currState === "past" ? '#5DB06C' : 'white'}} onClick={() => setCurrState("past")}>
                  <HeaderText>
                    Past Rewards
                  </HeaderText>
                </HeaderCapsulePast>
              </HeaderCapsule>
            </Header>
            <Cards>
              {currState === 'current' ? (
              <ColumnFlex>
                {currRewards.map((reward) => (
                  <Card> 
                    <RowFlex>
                        <img src={reward.reward.logo} alt={reward.reward.vendor} width={50} height={50} style={{margin: 10, alignSelf: 'center'}} />
                        <ColumnFlex style={{marginLeft: 5, marginRight: 10, width: '160px'}}>
                            <p style={{fontSize: 10, marginBottom: '5px'}} >{reward.reward.id}</p>
                            <p style={{fontSize: 10, fontWeight: 'bold', marginTop: '0px', marginBottom: '5px'}} >{reward.reward.vendor}</p>
                            <p style={{fontSize: 10, marginTop: '0px'}} >{reward.reward.details}</p>
                            <p style={{fontSize: 10}} >Valid until: 31 Dec  22</p>
                        </ColumnFlex>
                        <ColumnFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                            <p style={{fontSize: 10}} >3 Nov 2022 17:54</p>
                            <div>
                            <GreenLeaf/>
                            <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> {reward.reward.tokensNeeded} </span>
                            </div>
                            <div>
                            <UseNow style={{fontSize: 12, textDecoration:'underline', color:'#5DB06C'}} onClick={() => navigate('/use-reward', { state: {'reward': reward} })}>Use now</UseNow>
                            </div>
                        </ColumnFlex>
                    </RowFlex>
                  </Card>
                ))}
              </ColumnFlex>
              ):(
                <ColumnFlex>
                {pastRewards.map((reward) => (
                  <Card> 
                    <RowFlex>
                        <img src={reward.reward.logo} alt={reward.reward.vendor} width={50} height={50} style={{margin: 10, alignSelf: 'center'}} />
                        <ColumnFlex style={{marginLeft: 5, marginRight: 10, width: '160px'}}>
                            <p style={{fontSize: 10, marginBottom: '5px'}} >{reward.reward.id}</p>
                            <p style={{fontSize: 10, fontWeight: 'bold', marginTop: '0px', marginBottom: '5px'}} >{reward.reward.vendor}</p>
                            <p style={{fontSize: 10, marginTop: '0px'}} >{reward.reward.details}</p>
                            <p style={{fontSize: 10}} >Valid until: 31 Dec  22</p>
                        </ColumnFlex>
                        <ColumnFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                            <p style={{fontSize: 10}} >3 Nov 2022 17:54</p>
                            <div>
                            <GreenLeaf/>
                            <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> {reward.reward.tokensNeeded} </span>
                            </div>
                        </ColumnFlex>
                    </RowFlex>
                  </Card>
                ))}
              </ColumnFlex>
              )}
            </Cards>
        </RewardsPage>
    )
}

export default myRewardsPage;