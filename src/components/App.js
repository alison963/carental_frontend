
import '../App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Content from './Content';
import AddCar from './AddCar';

function App() {
  
  const [cars, setCars] = useState(() => 
  {
    const sortedCars = JSON.parse(localStorage.getItem("cars"));
    return sortedCars || [];
  });
    
  function deleteItem (id) {
    setCars(prevItem => {
      return prevItem.filter((name, index) => {
        return index !== id;
      })
    })
  }
  function addItem(newCar) {
    setCars(prevItem => {
      return [...prevItem, newCar];
    })
  }

  
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
    console.log("error");
  }, [cars]);
  return (
    <div className="App">
      <Navbar />
      <div className= "grid grid-cols-4 ">
      {cars?.length > 0 && cars.map((car, index) => {
        return (
          <Content 
            key = {index}
            id = {index}
            name = {car.name}
            price = {car.price}
            onDelete = {deleteItem}
          />
        );
      })}
      </div>
      <AddCar onAdd = {addItem}/>
      
    </div>
  );
}

export default App;
