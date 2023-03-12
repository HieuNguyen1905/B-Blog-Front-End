import React from 'react'
import { Link } from 'react-router-dom'
import "./Single.css"
import Menu from '../../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='single-content'>
        <img src='http://placekitten.com/200/300' />

        <div className='user'>
          <img src='http://placekitten.com/200/300' />

          <div className='info'>
            <span className='span-single'>Hieu</span>
            <p>Posted 2 day ago</p>
          </div>
          <div className='edit'>
            <Link to={`/upload?edit=2`}>
              <img src={require('../../Picture/edit.png')} />
            </Link>
            <Link>
              <img src={require('../../Picture/delete.png')} />
            </Link>
          </div>
        </div>
        <h1>ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.</h1>
        <p> iipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.psum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.ipsum text is commonly used as placeholder text in publishing, graphic design, and web development. </p>
      </div>
        <Menu/>
    </div>
  )
}

export default Single 