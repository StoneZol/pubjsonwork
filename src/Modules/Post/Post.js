import axios from "axios";
import React from "react"
import { useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";

export default function Post(){
    const { id } = useParams(); //check id from url
    const [post, setPost] =useState(null) // post default as null
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {// ok
            setPost(response.data)
            console.log(id);
            console.log(response.data); 
        })
        .catch(error => console.error(error)) //not ok
    }, [id])
    return(
      <div className="Page">
        <div className="PageBox">
           <div className='Item'>
          {post && ( // if we have post, we create h2 and p
         <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
         </>
          )}
        <Link to={'/Post_page'}>Back</Link>
          </div>
        </div>
      </div>

    )
  }