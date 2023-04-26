import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={{color:"white",textAlign:"center"}}>Calculator</h1>
    <App />
  </React.StrictMode>
);


