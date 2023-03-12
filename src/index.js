import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { doctorsApi } from './features/api/doctorsApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={ doctorsApi }>
    <Router>
      <Routes>
        <Route path='/*' element={ <App /> } />
      </Routes>
    </Router>
  </ApiProvider>
);
