import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Convention from './Convention';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-224170174-1"; 
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
    <Convention />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
