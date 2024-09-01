
import '../App.css';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Navbar from './navbar';
import Content from './Content';
import AddCar from './AddCar';
import EditItem from './EditItem';

function App() {
  
  const[visible, setvisible] = useState(false);
  const [cars, setCars] = useState(() => 
  {
    const sortedCars = JSON.parse(localStorage.getItem("cars"));
    return sortedCars || [];
  });
  // function to delete an Item 
  function deleteItem (id) { //search in the array by using the value name and the index and return only those that does not match to the id we want to delete
    setCars(prevItem => { 
      return prevItem.filter((name, index) => { // filter function is accepting a function that can take up to three arguments
        return index !== id;
      })
    })
  }
  //function to add an Item
  function addItem(newCar) {
    setCars(prevItem => {
      return [...prevItem, newCar];
    })
  }
  function Edit() {
    setvisible(!visible);
  }
  

  
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
    console.log("error");
  }, [cars]);
  return ( //rendering all what you see in App firstly Navbar then Content and AddCar
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
            distance = {car.distance}
            onDelete = {deleteItem}
            onEdit = {Edit}
            boolModal = {visible}
            //onClose = {visible}
            

          />
        );
      })}
      </div>
      <AddCar onAdd = {addItem}/>
      
    </div>
  );
}

export default App;
