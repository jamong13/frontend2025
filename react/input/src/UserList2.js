import React from 'react'
import User from './User'

export default function UserList2({users}) {
    
  return (
    <div>
        {/* <User user = {users[0]}/>
        <User user = {users[1]}/>
        <User user = {users[2]}/> */}
        {users.map(user=>(
            <User user={user} key={user.id} />
        ))}
    </div>
  )
}
