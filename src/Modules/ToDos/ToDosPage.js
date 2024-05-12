import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import TodosList from './TodosList'

export default function ToDosPage() {
    const [todos, setTodos]= useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            setTodos(response.data)
            console.log(response.data);
        })
        .catch(error => console.error(error))
    },[])
  return (
    <div className='Page'>
        <div className='PageBox'>
            <TodosList todos={todos}></TodosList>
        </div>
    </div>
  )
}
