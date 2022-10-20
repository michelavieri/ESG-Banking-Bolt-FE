import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import GreenPage from './routes/greenPage'
import PaymetPage from './routes/paymentPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/green" element={<GreenPage />} />
        <Route path="/payment" element={<PaymetPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
