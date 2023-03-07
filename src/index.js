import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserContextProvider } from "./userContext";
import { DoctorContextProvider } from "./doctorContext";
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DoctorContextProvider>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </DoctorContextProvider>
);