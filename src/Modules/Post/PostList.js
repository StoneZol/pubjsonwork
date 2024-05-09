import React from "react"
import {Link} from "react-router-dom"

export default function PostList({posts}) {
    return (
        <div className='Item'>
            <ul>
                {
                    posts.map((post, index) => (
                        <li key={index}>
                            <Link to={`/Post_page/Post/${post.id}`}>User:{post.userId} Title: {post.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}