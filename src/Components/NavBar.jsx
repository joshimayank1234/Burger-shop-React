import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <nav>
        <h2>Shop</h2>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Products'}>Products</Link></li>
        </ul>
    </nav>
  )
}
