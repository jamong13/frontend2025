import React from 'react'

export default function User({user}) {
  return (
    <div>
      <b>{user.username}</b><span>({user.email})</span>
    </div>
  )
}
