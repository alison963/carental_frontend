import React, { useEffect, useState } from 'react';
import MyUser from './MyUser';

const MyUsers = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [interleaveData, setInterleaveData] = useState([]);

  
  
  
  
  useEffect(() => {

    const titels = async () => {
      await fetch('https://jsonplaceholder.typicode.com/posts')

        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.log(err));
    }
    titels();

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

  
  
  useEffect(() => {
    // Create a function to interleave the users and posts
  const interleaveData = (users, posts) => {
    const interleavedData = [];
    const maxLength = Math.max(users.length, posts.length);

    for (let i = 0; i < maxLength; i++) {
      if (i < users.length) {
        interleavedData.push(<div>{users[i].id - users[i].name - users[i].email}</div>);
      }
      if (i < posts.length) {
        interleavedData.push(<div>{posts[i].userId - posts[i].title }</div>);
      }
    }

    return interleavedData;
  };

    if (users.length > 1 && posts.length > 1){setInterleaveData(interleaveData(users, posts));}

  }, [users, posts]);

  // Get the interleaved data
 

  return (
    <div>
      {interleaveData.map((item) => (
          <li key={item.id}>
          {item}
          </li>
        ))}
    </div>
  );
};

export default MyUsers;
//rafce
