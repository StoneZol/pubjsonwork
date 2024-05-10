import React from 'react'
import { Link } from 'react-router-dom'

export default function UserList({users}) {
  return (
    <div className='Item'>
        <ul>
            {
                users.map((user, index)=>(
                    <li key={index}>
                        <Link to={`/Users_page/User/${user.id}`}>UserID:{user.id} UserName: {user.username}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
