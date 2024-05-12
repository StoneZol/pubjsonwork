import React from 'react'
import { Link } from 'react-router-dom'


export default function PhotosList({photos}) {
  return (
    <div className='Item'>
        <ul>
            {
                photos.map((photo, index)=> (
                    <li key={index}>
                        <Link to={`/Photos_page/Photo/${photo.id}`}><img src={photo.thumbnailUrl} alt={`Photo ${photo.id}`}></img></Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
