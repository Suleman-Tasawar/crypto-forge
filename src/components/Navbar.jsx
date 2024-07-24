import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

function Navbar() {
  return (
    <div className='flex justify-around items-center m-5'>
        <Link to="/">Crypto Hunter</Link>
        <div>
            <Dropdown></Dropdown>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar