import React from "react";
import "./Content.css";
import Modal from 'react-modal';
import AddCar from "./AddCar";

const customStyles = {
    content: { //inside of the box
        top: '50%', 
        left: '50%',
        /*positining the element bottom-right */
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)', //centering it on x and y Achse
        background: '#b2d0ca', // Feste Hintergrundfarbe
        padding: '20px',
        borderRadius: '10px',
        zIndex: 1001, // Sicherstellen, dass es über der Überlagerung liegt
      },
    overlay: { // background of the modal
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dunkle Überlagerung
        zIndex: 1000, // Stellen Sie sicher, dass es hinter dem Modal liegt
      },
  };

function Content(props)  {

    
    return ( 
        <div className= "ContentAll">
            <h1>{props.name}</h1>
            <p>{props.price} €</p>
            <p>{props.distance} km</p>
            <div className="Buttons">
            <button onClick={() => {
                props.onDelete(props.id)
            }}>delete</button>
            <button onClick={() => {
                props.onEdit()
            }}>Edit</button>
            <Modal isOpen = {props.boolModal} style={customStyles}>
                <AddCar />
                <button onClick={() => {
                props.onEdit()
            }}>close</button>
            <button onClick={() => {
                props.onEdit()
            }}>save changes</button>
            </Modal>
            
            </div>
        </div>
     );
}
 
export default Content;
