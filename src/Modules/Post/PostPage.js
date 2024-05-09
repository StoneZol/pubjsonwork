import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import PostList from './PostList';
import Post from './Post';

export default function PostPage() {
  const [posts, setPosts] = useState([]); // post hook
  useEffect (()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      setPosts(response.data);
      console.log(response.data);
    })
    .catch(error =>{
      console.error('Error fetching data:', error);
    })
  }, [])
  return (
    <div className='Page'>
    <div className='PageBox'>
            <PostList posts={posts}></PostList> 
            {/* load PostList with props posts */}
      </div>
    </div>
  )
}

