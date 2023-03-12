import React from 'react'
import {Link} from 'react-router-dom'
import "./Style.css"

export default function Login () {
  return (
    <div className='login'>
      <h1 className='h1'>Login</h1>
      <form>
        <input className='input' type="text" placeholder='username'/>
        <input className='input' type="password" placeholder='Password'/>
        <p className='p-text'>Wrong user or password!</p>
        <span className='span'>Create a new account? <Link to='/signup'>Sign up</Link></span>
        <button className='login-btn'>Login</button>
      </form>
    </div>
  )
}
