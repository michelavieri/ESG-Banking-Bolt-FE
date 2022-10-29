import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {ReactComponent as BackButton} from '../assets/back-button.svg';
import Promo1 from '../assets/promo1.png';
import Promo2 from '../assets/promo2.png';

const PromotionsPage = styled.div`
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
  margin-bottom: 20px;
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

const PromotionDiv = styled.div`
  margin-bottom: 15px;
  align-items: center;
  margin-left:45px;
`

function listPromotionsPage() {
    const navigate = useNavigate();
    return (
        <PromotionsPage>
            <Header>
                <RowFlex>
                    <BackButton width = "16" height= "16" onClick={() => navigate('/green')}/>
                    <HeaderTitle>Promotions</HeaderTitle>
                </RowFlex>
            </Header>
            <ColumnFlex>
              <PromotionDiv>
                <a href="https://www.worldwildlife.org/" target="_blank" rel="noreferrer">
                  <img src={Promo1} alt="" width={300} height={180}/>
                </a>
              </PromotionDiv>
              <PromotionDiv>
                <img src={Promo2} alt="" width={300} height={180}/>
              </PromotionDiv>
              <PromotionDiv>
                <img src={Promo1} alt="" width={300} height={180}/>
              </PromotionDiv>
              <PromotionDiv>
                <img src={Promo2} alt="" width={300} height={180}/>
              </PromotionDiv>
            </ColumnFlex>
        </PromotionsPage>
    );
}

export default listPromotionsPage;