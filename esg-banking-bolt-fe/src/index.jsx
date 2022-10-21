import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import GreenPage from './routes/greenPage'
import PaymentPage from './routes/paymentPage'
import ConfirmPaymentPage from './routes/confirmPaymentPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/green" element={<GreenPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/confirm-payment" element={<ConfirmPaymentPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
