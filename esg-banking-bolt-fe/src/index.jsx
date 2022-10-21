import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import GreenPage from './routes/greenPage';
import TreePage from './routes/treePage';
import ListRewardsPage from './routes/listRewardsPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/green" element={<GreenPage />} />
        <Route path="/tree" element={<TreePage />} />
        <Route path="list-rewards" element={<ListRewardsPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
