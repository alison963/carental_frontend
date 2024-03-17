import React from "react";

const User  = (props) => {
    return (
        <div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.username}</p>
                <p>{props.email}</p>
                <img src = {props.img} width ={300}></img>
            </div>
        </div>
    );
}

export default User;