import React, { useEffect, useState } from 'react';

const MyUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const names = async () => {
      //OPTION 1
      await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err));
      //ALTERNATIVE OPTION 2
      //const response = await fetch('https://jsonplaceholder.typicode.com/users')
      //setUsers(await response.json());
    };
    names();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div className="box" key={user.id}>
            <p>
              {user.id + '. ' + user.name}
              <br />
            </p>
            <a href={user.email}>{user.email}</a>
          </div>
        );
      })}
    </div>
  );
};

export default MyUsers;
//rafce
