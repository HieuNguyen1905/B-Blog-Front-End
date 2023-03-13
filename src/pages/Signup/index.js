import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Style.css"
import axios from 'axios'

export default function Signup() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  })

  const [err, setErr] = useState(null)

  const handleChange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3001/api/auth/signup", input)
      navigate("/")
    } catch (err) {
      setErr(err.response.data)
    }
  }



  return (
    <div className='login'>
      <h1 className='h1'>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <input className='input' type="text" placeholder='username' name='username' onChange={handleChange} />
        <input className='input' type="text" placeholder='example@gmail.com' name='email' onChange={handleChange} />
        <input className='input' type="password" placeholder='Password' name='password' onChange={handleChange} />
        <button className='signup-btn'>Sign Up</button>
        {err && <p className='p-text'>{err}</p>}
        <span>
          Login instead? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}