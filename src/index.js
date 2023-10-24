import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './about';
import Firebase from './firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router >
      <Routes >
        <Route path='/portfolio' element={<App />} />
        <Route path='/fire' element={<Firebase />} />
      </Routes>
    </Router>
  </React.StrictMode>

);

reportWebVitals();
