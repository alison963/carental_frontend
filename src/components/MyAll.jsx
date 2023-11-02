import React, { useEffect, useState } from 'react';

const MyUsers = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [interleaveData, setInterleaveData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
    fetchPosts();
  }, []);

  useEffect(() => {
    const interleaveData = (users, posts) => {
      const interleavedData = [];
      const maxLength = Math.max(users.length, posts.length);

      for (let i = 0; i < maxLength; i++) {
        if (i < users.length) {
          interleavedData.push(
            <div key={users[i].id}>
              {users[i].id} - {users[i].name} - {users[i].email}
            </div>
          );
        }
        if (i < posts.length) {
          interleavedData.push(
            <div key={posts[i].id}>
              {posts[i].userId} - {posts[i].title}
            </div>
          );
        }
      }

      return interleavedData;
    };

    if (users.length > 0 && posts.length > 0) {
      setInterleaveData(interleaveData(users, posts));
    }
  }, [users, posts]);

  return (
    <div>
      {interleaveData.map((item) => (
        <li key={item.key}>{item}</li>
      ))}
    </div>
  );
};

export default MyUsers;
