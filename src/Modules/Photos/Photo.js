import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Photo() {
    const {id} = useParams();
    const [photo, setPhoto] = useState(null)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => {
            setPhoto(response.data)
            console.log(response.data)
            console.log(photo.url)
        })
        .catch(error => console.log(error))
    }, [id])
  return (
    <div className='Page'>
        <div className='PageBox'>
            <div className='Item'>
                {
                    photo && (
                        <>
                         <img src={photo.url}></img>
                         <p>{photo.title}</p>
                        </>
                    )
                }
                <Link to={'/Photos_page'}>back</Link>
            </div>
        </div>
    </div>
  )
}
