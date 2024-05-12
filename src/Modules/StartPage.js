import React from 'react'
import {Link} from 'react-router-dom'

export default function StartPage() {
    return (
        <div className='Page'>
            <div className='PageBox'>
                <div className='Item'>
                    <div className='About'>
                        <p>Welcome to the online world, where every byte of information represents my
                            learning process in web development and interaction with the public backend,
                            JSONPlaceholder. This web resource is a product of my exploration and practice
                            in API interaction and data handling. Here, I interact with JSONPlaceholder,
                            extracting and managing information through requests and data processing.</p>
                        <p>This site is my creation, where each detail represents a step in my learning
                            journey. Here, I've learned to use various methods of working with APIs,
                            processing information, and presenting it in a convenient form. This project has
                            helped me develop web development skills and expand my understanding of
                            client-server application interaction.</p>
                        <p>Join me on this exciting journey! Let's explore the possibilities of
                            JSONPlaceholder together and dive into the world of web development, learning
                            new aspects of creating interactive websites.</p>
                            <p>logs in devtools</p>
                    </div>
                </div>

                <div className='Item'>
                    <div className='Links'>
                        <Link to="/Post_page">Post</Link>
                        <Link to="/Users_page">Users</Link>
                        <Link to="/Todos_page">ToDos</Link>
                        <Link to="/Comments_page">Comments</Link>
                        <Link to="/Photos_page">Photos</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
