import React, { useEffect, useState } from 'react';
import Users from '../Users';
import User from './User';


function createUser(user) {
return <User 
name={user.name} 
username = {user.username} 
email = {user.email}
img = {user.img}
/>
}

const MyUsers = () => {
  return (
    <div className = "contentCar">
    
    {Users.map(createUser)}
    
    </div>
    
  );
};

export default MyUsers;
