import React from "react";

const User  = (props) => {
    return (
        <div>
                <h2>{props.name}</h2>
                <p>{props.username}</p>
                <p>{props.email}</p>
                <img src = {props.img} width ={300}></img>
        </div>
    );
}

export default User;