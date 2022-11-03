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
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 10px;
  width: 160px;
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
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:4000/rewards/retrieveAll`)
      .then(res => {
        setRewards(res.data);
      })
    }, []);

    const purchase = (reward) => {
        const req = {
          "username" : "user1",
          reward
        }
        axios.post(`http://localhost:4000/rewards/exchange`, {...req})
        .then(() => {
          navigate('/my-rewards');
        })
      }

    return (
        <RewardsPage>
            <Header>
                <RowFlex>
                    <BackButton width = "16" height= "16" onClick={() => navigate('/green')}/>
                    <HeaderTitle>Rewards Page</HeaderTitle>
                </RowFlex>
            </Header>
            <Cards>
                <ColumnFlex>
                    <RowFlex style={{flexWrap:'wrap'}}>
                    {rewards.map((reward) => (
                        <Card> 
                            <ColumnFlex>
                                <img src={reward.reward.picture} alt="" height={72} style={{ borderRadius: '10px'}} />
                                <RowFlex style={{marginLeft: 10, marginRight: 10}}>
                                    <p style={{fontSize: 10, fontWeight: 'bold'}} >{reward.reward.name}</p>
                                    <img src={reward.reward.logo} alt="" width={24} height={24} style={{marginTop: 10}} />
                                </RowFlex>
                                <Subtitle style={{marginLeft: 10, marginRight:10, marginTop:-3}}>Valid until: 31 Dec 22</Subtitle>
                                <RowFlex style={{marginLeft: 10, marginRight: 10, marginTop:0, marginBottom: 10}}>
                                    <div>
                                    <GreenLeaf/>
                                    <span style={{fontSize: 12, fontWeight: 'bold', marginLeft:5, color: '#5DB06C'}}> {reward.reward.tokenNeeded} </span>
                                    </div>
                                    <div>
                                    <button type="button" style={{ backgroundColor: 'transparent', border: '0px' }} onClick={() => purchase(reward)}>
                                        <span style={{fontSize: 12, textDecoration:'underline', color:'#5DB06C'}}>Purchase</span>
                                    </button>
                                    </div>
                                </RowFlex>
                            </ColumnFlex>
                        </Card>
                    ))}
                    </RowFlex>
                </ColumnFlex>
            </Cards>
        </RewardsPage>
    )
}

export default listRewardsPage;