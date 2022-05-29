import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Commitments from './screens/commitments/Commitments.tsx';
import AdditionalInfo from './screens/notifications/AdditionalInfo.tsx';
import Profile from './screens/profile/Profile.tsx';
import Sectors from './screens/sectors/Sectors.tsx';
import Stocks from './screens/stocks/Stocks.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <Commitments/> */}
    {/* <AdditionalInfo/> */}
    {/* <Profile/> */}
    {/* <Sectors/> */}
    <Stocks/>
  </React.StrictMode>
);
