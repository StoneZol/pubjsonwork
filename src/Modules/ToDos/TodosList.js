import React from 'react'
import { Link } from 'react-router-dom'

export default function TodosList({todos}) {
  return (
    <div className='Item'>
        <ul>
            {
                todos.map((todos, index)=>(
                    <li key={index}>
                        <Link to={`/Todos_page/Todos/${todos.id}`}>Id :{todos.id} Title: {todos.title}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
