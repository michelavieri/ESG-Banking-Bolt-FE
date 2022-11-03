import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import GreenPage from './routes/greenPage'
import PaymentPage from './routes/paymentPage'
import ConfirmPaymentPage from './routes/confirmPaymentPage'
import SuccessPaymentPage from './routes/successPaymentPage'
import TreePage from './routes/treePage';
import ListRewardsPage from './routes/listRewardsPage'
import ListPromotionsPage from './routes/listPromotionsPage';
import MyRewardsPage from './routes/myRewardsPage';
import UseRewardsPage from './routes/useRewardPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/green" element={<GreenPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirm-payment" element={<ConfirmPaymentPage />} />
        <Route path="/success-payment" element={<SuccessPaymentPage />} />
        <Route path="/tree" element={<TreePage />} />
        <Route path="/my-rewards" element={<MyRewardsPage/>} />
        <Route path="/use-reward" element={<UseRewardsPage/>} />
        <Route path="list-rewards" element={<ListRewardsPage/>}/>
        <Route path="list-promotions" element={<ListPromotionsPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
