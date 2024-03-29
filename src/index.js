import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom'
import './index.css';
import Login from './Login';
// import LoginAdmin from './admin/LoginAdmin';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    {/* <Routes> */}
      <Login/>
      {/* <Route path="/admin" element={<LoginAdmin/>} /> */}
    {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
