import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function User() {
    const {id} = useParams();
    const [user, setUser] = useState(null)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response =>{
            setUser(response.data)
            console.log(id);
            console.log(response.data);
        })
        .catch(error => console.error(error))
    },[id])

  return (
<div className='Page'>
    <div className='PageBox'>
        <div className='Item'>
            {user && (
        <> <h2>{user.username}</h2>
        <p>Name: {user.name}</p>
        <p>eMail: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <ul>
            Company
            <li>Brandname: {user.company.name}</li>
            <li>Catch phrase: {user.company.catchPhrase}</li>
            <li>Bs: {user.company.bs}</li>
        </ul>
        <ul>
            Address
            <li>Street: {user.address.street}</li>
            <li>Suite: {user.address.suite}</li>
            <li>City: {user.address.city}</li>
            <li>Zipcode: {user.address.zipcode}</li>
            <li>{user.address.geo.lat}/{user.address.geo.lng}</li>
        </ul>
    </>
    )}
    <Link to={'/Users_page'}>Back</Link>
</div>
</div>
</div>
  )
}
