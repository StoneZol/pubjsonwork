import React, {Component} from 'react';
import {createRoot, Route, Routes, Link} from "react-router-dom"
import axios from 'axios';
import Header from './Header';
import StartPage from './StartPage';
import PostPage from './Post/PostPage';
import Post from './Post/Post';

export default class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = { // Initializes the component's state with an empty array for posts.
            posts: []
        }
    }
     // componentDidMount is called after the component is mounted.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch(error => console.error(error))
        }
    render() {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<StartPage />}></Route>
                    <Route path='/Post_page' element={<PostPage />}></Route>
                    {
                        // for state of posts using map()for post link.
                        this.state.posts.map(post => (
                            // use key for every element post of path 
                                <Route key={post.id} path={`/Post_page/Post/:id`} element={<Post post={post}/>}>
                                </Route>
                            ))
                    }
                </Routes>
            </div>
        );
    }
}