import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='Header'>
        <div className='Logo'>
            <Link to ="/">PubJSON_work</Link>
        </div>
    </div>
  )
}
