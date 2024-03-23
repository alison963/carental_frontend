import React from "react";

function Content(props)  {
    return ( 
        <div className= "grid my-5 text-center #1c4645 bg-teal-800  p-4 mx-4">
            <h1>{props.name}</h1>
            <p>{props.price}</p>
            <button onClick={() => {
                props.onDelete(props.id)
            }}>delete</button>
        </div>
     );
}
 
export default Content;
