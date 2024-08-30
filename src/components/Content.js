import React from "react";
import "./Content.css";

function Content(props)  {
    return ( 
        <div className= "ContentAll">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <div className="Buttons">
            <button onClick={() => {
                props.onDelete(props.id)
            }}>delete</button>
            <button onClick={() => {
                props.onEdit(props.id)
            }}>Edit</button>
            <button onClick={() => {
                props.onInfo(props.id)
            }}>Info</button>
            </div>
        </div>
     );
}
 
export default Content;
