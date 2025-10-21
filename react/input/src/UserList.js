import React from 'react'

export default function UserList() {
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
        <div>
            <b>{users[0].username}<span>({users[0].email})</span></b>
        </div>
        <div>
            <b>{users[1].username}<span>({users[1].email})</span></b>
        </div>
        <div>
            <b>{users[2].username}<span>({users[2].email})</span></b>
        </div>
    </div>
  )
}
