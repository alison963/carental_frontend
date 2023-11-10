import React from 'react'

const MyUser = ({user}) => {
  return (
    <div>
        
          <div className="box" key={user.id}>
            <p>
              {user.id + '. ' + user.name}
              <br />
            </p>
            <a href={user.email}>{user.email}</a>
            
          </div>
              
    </div>
  )
}

export default MyUser