import React, { useEffect, useState } from 'react';
import MyUser from './MyUser';

const MyUsers = () => {
  const [users, setUsers] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);
  
  
  const nextUser =( ) => {
    setCurrentIdx((currentIdx+1) % users.length);
  }

  return (
    <div>
      {users.map((item) => (
        <li key={item.key}><MyUser user={item}/></li>
      ))}
      <button onClick={nextUser} >next user</button>
      {!loading && <p><MyUser user={users[currentIdx]} /></p>}
    </div>
  );
};

export default MyUsers;
