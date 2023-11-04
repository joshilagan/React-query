import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        </h1>
  </div>
  )
}

export default Navbar