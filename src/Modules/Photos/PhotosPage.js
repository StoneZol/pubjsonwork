import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import PhotosList from './PhotosList'

export default function PhotosPage() {
    const [photos, setPhotos] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            setPhotos(response.data)
            console.log(response.data);
        })
        .catch(error => console.error(error))
    },[])
    return (
        <div className='Page'>
        <div className='PageBox'>
                <PhotosList photos={photos}></PhotosList> 
          </div>
        </div>
      )
}
