import React from 'react'
import { Link } from 'react-router-dom'

export default function CommentList({comments}) {
  return (
    <div className='Item'>
        <ul>
            {
                comments.map((comment, index) => (
                    <li key={index}>
                        <Link to={`/Comments_page/Comment/${comment.id}`}>Email: {comment.email}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
