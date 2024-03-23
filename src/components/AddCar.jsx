import React, {useEffect, useState} from "react";

function AddCar (props ) {
    // const storedItems  = JSON.parse(localStorage.getItem('names'))

    const [car, setCar] = useState({
      name: "",
      price: ""
    });
    

    function handleClick(event) {
        props.onAdd(car);
        setCar({
          name: "",
          price: ""
        })
        event.preventDefault();
    }
    function handleChange(event) {
      const {name, value} = event.target;
      
      setCar(prevCar => {
        return {
          ...prevCar,
          [name]: value
        };
      });
    }

  // useEffect(() => {
  //   localStorage.setItem(JSON.stringify("names",names));
    
  // })

    return (
        <div className="container">
            <h1>Add You Car</h1>
            <h1>Hello </h1>
            <form>
            <input
                onChange={handleChange}
                name="name"
                placeholder="Car name"
                value={car.name}
            />
            <input
                onChange={handleChange}
                name="price"
                placeholder="Car price"
                value={car.price}
            />
            <button onClick={handleClick}>Submit</button>
            </form>
        </div>
      );
}

export default AddCar;