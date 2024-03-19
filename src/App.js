import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Content from './components/Content';
import AddCar from './components/AddCar';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Content />
      <AddCar />
      
      
    </div>
  );
}

export default App;
