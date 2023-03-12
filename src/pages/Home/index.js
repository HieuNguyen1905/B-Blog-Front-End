import React from 'react'
import {Link} from 'react-router-dom'
import './Style.css'

export default function Home () {
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
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className='img'>
              <img src={post.img} />
            </div>
            <div className='content'>
            <Link className='link' to={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
            <button className='menu-btn'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

