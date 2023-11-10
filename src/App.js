import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyAll from './components/MyUsers';
import Navbar from './components/navbar';
import Content from './components/Content';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
