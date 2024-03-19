import React, {useState} from "react";

function AddCar ( ) {

    const [enteredText, setEnteredText] = useState(false);
    function handleClick(event) {
    setEnteredText(true);

    event.preventDefault();
    }

    const [name, setName] = useState(" ");

    function handleChange(event) {
    setName(event.target.value);


  }

    return (
        <div className="container">
            <h1>Add You Car</h1>
            <h1>Hello {enteredText && name} </h1>
            <form onSubmit={handleClick}>
            <input
                onChange={handleChange}
                type="text"
                placeholder="Car name"
                value={name}
            />
            <input
                type="text"
                placeholder="Car username"
                
            />
            <button typ = "Submit">Submit</button>
            </form>
        </div>
      );
}

export default AddCar;