
import '../App.css';
import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import AddCar from '../components/AddCar';


function App() {



  // function to delete an Item 
  function deleteItem(id) { //search in the array by using the value name and the index and return only those that does not match to the id we want to delete

  }

  //function to add an Item
  function addItem(newCar) {

  }

  function saveChanges() {
   

  }
  /* 
  array is created with useState and it gets updated every time i run the app if something changed in json file 
  */
  const [products, setProducts] = useState([]);


  function getProduct() {
    fetch("http://localhost:4000/Products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        alert("error fetching");
      });
  }
  // useEffect to call the function one time 
  useEffect(getProduct, [])


/* 
rendering: 
AddCar component where i can add new items into api
conente : here i loop through json file and pass some information of every car as an argument into content where every car is rendered alone 

*/
  return ( 
    <div className="App">
      <AddCar onAdd={addItem}
        
      />
      <div className="grid grid-cols-2">
      {products.map((product, index) => (
          <div key={index}>
            <Content
              key={index}  // Set the unique key based on the index
              id={product.id}  // Assuming each product has an id
              name={product.make}  // Render product name
              price = {product.price}
              mileage = {product.mileage}
              
            />
          </div>
        ))}
      </div>


    </div>
  );
}

export default App;
