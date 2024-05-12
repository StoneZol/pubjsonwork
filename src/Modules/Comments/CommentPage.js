import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import CommentList from './CommentList'

export default function CommentPage() {
    const [comments, setComment]= useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            setComment(response.data);
            console.log(response.data);
        })
        .catch(error => console.log(error));
    }, [])
  return (
    <div className='Page'>
        <div className='PageBox'>
            <CommentList comments={comments}></CommentList>
        </div>
    </div>
  )
}
