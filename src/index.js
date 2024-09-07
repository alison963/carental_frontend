import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './pages/navbar';

const root = ReactDOM.createRoot(document.getElementById('root')); //rendering App
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element = {<App /> }></Route>

    </Routes>
    
  </BrowserRouter>
);
