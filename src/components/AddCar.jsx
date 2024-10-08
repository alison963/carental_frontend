import React, {useState} from "react";


function AddCar (props ) {
    

    const [car, setCar] = useState({ //an object with there values name, price and a distance 
      name: "",
      price: "", 
      distance: ""
    });
    

    function handleClick(event) { // every time i click the button 
        props.onAdd(car);
        setCar({ // updating the array of the object of car 
          name: "",
          price: "",
          distance: ""
        })
        event.preventDefault(); // preventing reloading of page 
    }
    function handleChange(event) {
      const {name, value} = event.target; // event.target is the elemnt where handelchange has triggered and here i store it in name, value  
      
      setCar(prevCar => { //updating cars by returning the new values to the old values
        return {
          ...prevCar,
          [name]: value
        };
      });
    }
   



    return (
        <div className="container">
            {props.header && 
              <h1>add your car</h1>
            }
            {!props.header && 
              <h1>change car</h1>
              }
            
            <h1> {car.name} </h1>
            <form>
            <input
                onChange={handleChange} // handelChange will be triggered every time the input change
                name="name"
                placeholder="Car name"
                value={car.name}
            />
            <input
                onChange={handleChange} // here also 
                name="price"
                placeholder="Car price"
                value={car.price}
            />
            <input
                onChange={handleChange} // an also here
                name="distance"
                placeholder="distance"
                value={car.distance}
            />
            {props.bool && <button onClick={handleClick}>Submit</button> /* hide button if in edit mode*/ } 
            </form>
        </div>
      );
}

export default AddCar;