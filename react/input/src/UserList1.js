import React from 'react'
import User from './User'

export default function UserList1() {
    const users = [
        {
            id:1,
            username:'velopert',
            email:'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]

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
