import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './app/store.js';
import { Provider } from 'react-redux';
import { fetchDoctors } from './features/doctor/doctorSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

store.dispatch( fetchDoctors() );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <Router>
      <Routes>
        <Route path='/*' element={ <App /> } />
      </Routes>
    </Router>
  </Provider>
);
