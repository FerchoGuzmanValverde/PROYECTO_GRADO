import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Suspense fallback={<p>Cargando página...!!</p>} >
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Suspense>
  </Router>
);

reportWebVitals();