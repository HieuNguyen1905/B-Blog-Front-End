import React from 'react'
import {Link} from 'react-router-dom'
import "./Style.css"


export default function Signup () {
  return (
    <div className='login'>
      <h1 className='h1'>Create an account</h1>
      <form>
        <input className='input'  type="text" placeholder='username'/>
        <input className='input' type="text" placeholder='example@gmail.com'/>
        <input className='input' type="password" placeholder='Password'/>
        <p className='p-text'>Wrong email or password!</p>
        <button className='signup-btn'>Sign Up</button>
      </form>
    </div>
  )
}