import './Menu.css'
import React from 'react'
// import {Link} from 'react-router-dom'

function Menu() {
    const posts = [
        {
          id:1,
          title:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          description:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          img: "http://placekitten.com/200/300"
        },
        {
          id:2,
          title:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          description:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          img: "http://placekitten.com/200/300"
        },
        {
          id:3,
          title:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          description:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          img: "http://placekitten.com/200/300"
        },
        {
          id:4,
          title:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          description:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          img: "http://placekitten.com/200/300"
        },
        {
          id:5,
          title:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          description:"ipsum text is commonly used as placeholder text in publishing, graphic design, and web development.",
          img: "http://placekitten.com/200/300"
        }
      ]

  return (
      <div className='menu-tab'>
        <h1>Other posts that you may like</h1>
        {posts.map(post=>(
          <div className='menu-tab-post' key={post.id}>
              <img alt='' src={post.img} />
              <h2>{post.title}</h2>
              <button className='menu-btn'>Read More</button>
          </div>
        ))}
      </div>
  )
}

export default Menu