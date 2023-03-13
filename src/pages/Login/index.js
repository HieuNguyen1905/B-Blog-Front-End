import React from 'react'
import {Link} from 'react-router-dom'
import "./Style.css"
// import axios from 'axios'

export default function Login () {
  // const [input, setInput] = useState({
  //   username: "",
  //   password: "",
  // })

  // const [err, setErr] = useState(null)

  // const handleChange = (e) => {
  //   setInput(prev => ({ ...prev, [e.target.name]: e.target.value }))
  // }

  // const navigate = useNavigate()

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
