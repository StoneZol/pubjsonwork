import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import User from './User';
import UserList from './UserList';

export default function UsersPage() {
const [users,setUsers] = useState([]);
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(response => {
        setUsers(response.data)
        console.log(response.data);
    })
    .catch(error => console.error(error))
},[])
return(
    <div className='Page'>
        <div className='PageBox'>
            <UserList users={users}></UserList>
        </div>
    </div>
)
}
