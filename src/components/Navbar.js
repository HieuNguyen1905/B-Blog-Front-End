import React, { useContext} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from '../context/authContext'

const Navbar = () => {
  const {currentUser, logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className='nav-container'>
            <div className='logo'>
              <Link to={"/"}>
              <img alt='' className ="img-logo" src={require('../Picture/logo.png')}/>
              </Link>
            </div>
            <div className='links'>
              <Link className='link' to="/?gallery=technology">Technology</Link>
              <Link className='link' to="/?gallery=art">Art</Link>
              <Link className='link' to="/?gallery=meme">Meme</Link>
              <Link className='link' to="/?gallery=gaming">Gaming</Link>
              <Link className='link' to="/?gallery=movie">Movie</Link>
              <Link className='link' to="/?gallery=food">Food</Link>
              <Link className='link' to="/?gallery=travel">Travel</Link>
              <span className='span-nav'>{currentUser?.user.dataValues.username}</span>
              {currentUser?<span onClick={logout} className='span-nav'>Logout</span> : <Link className='span-nav' to="/login">Login</Link>}
              <span className='post-btn'>
                <Link to="/post" className='link'>Post</Link>
              </span>
            </div>
        </div>

    </div>
  )
}

export default Navbar
