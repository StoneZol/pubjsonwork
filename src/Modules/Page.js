import React, {Component} from 'react';
import {createRoot, Route, Routes, Link} from "react-router-dom"
import axios from 'axios';
import Header from './Header';
import StartPage from './StartPage';
import PostPage from './Post/PostPage';
import Post from './Post/Post';
import UsersPage from './Users/UsersPage';
import User from './Users/User';
import ToDosPage from './ToDos/ToDosPage';
import ToDos from './ToDos/ToDos';
import CommentPage from './Comments/CommentPage';
import Comment from './Comments/Comment';
import PhotosPage from './Photos/PhotosPage';
import Photo from './Photos/Photo';

export default class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = { // Initializes the component's state with an empty array for posts.
            posts: [],
            users: [],
            todos: [],
            comments: [],
            photos: [],
        }
    }
     // componentDidMount is called after the component is mounted.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({posts: response.data})
            })
            .catch(error => console.error(error));
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({users: response.data})
        })
        .catch(error => console.error(error));
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            this.setState({todos: response.data})
        })
        .catch(error => console.log(error))
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response => {
            this.setState({comments: response.data})
        })
        .catch(error => console.log(error))
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            this.setState({photos: response.data})
        })
        .catch(error => console.log(error))
        }

    render() {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<StartPage />}></Route>
                    <Route path='/Post_page' element={<PostPage />}></Route>
                    <Route path='/Users_page' element = {<UsersPage />}></Route>
                    <Route path='/Todos_page' element = {<ToDosPage />}></Route>
                    <Route path='/Comments_page' element = {<CommentPage />}></Route>
                    <Route path='/Photos_page' element ={<PhotosPage />}></Route>
                    { // gen posts link
                        // for state of posts using map()for post link.
                        this.state.posts.map(post => (
                            // use key for every element post of path 
                                <Route key={post.id} path={`/Post_page/Post/:id`} element={<Post post={post}/>}>
                                </Route>
                            ))
                    }
                    {   // gen users link
                        this.state.users.map(user =>(
                            <Route key={user.id} path={`/Users_page/User/:id`} element={<User user={user}/>}>
                            </Route>
                        ))
                    }
                    {   //gen todos link
                        this.state.todos.map(todos => (
                            <Route key={todos.id} path={`/Todos_page/Todos/:id`} element= {<ToDos todos={todos}/>}>
                            </Route>
                        ))
                    }
                    {   // gen comments link
                        this.state.comments.map(comments => (
                            <Route key={comments.id} path={`/Comments_page/Comment/:id`} element = {<Comment comments={comments}/>}>
                            </Route>
                        ))
                    }
                    {
                        this.state.photos.map(photos => (
                            <Route key={photos.id} path={`/Photos_page/Photo/:id`} element = {<Photo photos={photos}/>}></Route>
                        ))
                    }
                </Routes>
            </div>
        );
    }
}