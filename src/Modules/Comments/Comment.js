import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import React from 'react'

export default function Comment() {
    const { id } = useParams();
    const [comment, setComment] = useState(null);
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then(response => {
            setComment(response.data)
            console.log(id);
            console.log(response.data);
        })
        .catch(error => console.error(error))
    }, [id])
  return (
    <div className="Page">
        <div className="PageBox">
            <div className="Item">
                {comment && (
                    <>
                    <h2>eMail: {comment.email}</h2>
                    <p>{comment.name}</p>
                    <p>{comment.body}</p>
                    </>
                )}
                <Link to={'/Comments_page'}>Back</Link>
            </div>
        </div>
    </div>
  )
}
