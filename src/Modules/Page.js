import React, {Component} from 'react';
import {createRoot, Route, Routes, Link} from "react-router-dom"
import axios from 'axios';
import Header from './Header';
import StartPage from './StartPage';
import PostPage from './Post/PostPage';
import Post from './Post/Post';
import UsersPage from './Users/UsersPage';
import User from './Users/User';

export default class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = { // Initializes the component's state with an empty array for posts.
            posts: [],
            users: []
        }
    }
     // componentDidMount is called after the component is mounted.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch(error => console.error(error))
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({users: response.data})
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
                    <Route path='/Users_page' element = {<UsersPage />}></Route>
                    {
                        // for state of posts using map()for post link.
                        this.state.posts.map(post => (
                            // use key for every element post of path 
                                <Route key={post.id} path={`/Post_page/Post/:id`} element={<Post post={post}/>}>
                                </Route>
                            ))
                    }
                    {
                        this.state.users.map(user =>(
                            <Route key={user.id} path={`/Users_page/User/:id`} element={<User user={user}/>}>
                            </Route>
                        ))
                    }
                </Routes>
            </div>
        );
    }
}