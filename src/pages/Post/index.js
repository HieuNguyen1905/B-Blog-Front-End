import React, {useState} from 'react'
import './Style.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Post () {
  const [value,setValue] = useState("")

  return (
    <div className='write'>
      <div className='write-content'>
        <input className='input-content' placeholder='Title'/>
        <div className='edit-content'>
        <ReactQuill className='edit-c' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className='items'>
        <div className='item-content'>
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Privacy:</b> Public
          </span>
          <input style={{display:"none"}} type="file" id='file'/>
          <label htmlFor="file">Upload Image</label>
          <br/>
          <div className='buttons'>
          <button>Save draft</button>
          <button>Update</button>
          </div>
        </div>
        <div className='item-content2'>
          <h1>Gallery</h1>
          <div className='cat'>
          <input type="radio" name='gallery' className='input-gallery' value="technology" id='technology'/>
          <label htmlFor="technology">Technology</label></div>
          <div className='cat'>
          <input type="radio" name='gallery' className='input-gallery' value="art" id='art'/>
          <label htmlFor="art" >Art</label></div>
          <div className='cat'>
          <input type="radio" name='gallery' className='input-gallery' value="meme" id='meme'/>
          <label htmlFor="meme" >Meme</label></div>
          <div className='cat'>
          <input type="radio" name='gallery' className='input-gallery' value="gaming" id='gaming'/>
          <label htmlFor="gaming" >Gaming</label></div>
          <div className='cat'>
          <input type="radio" name='gallery' className='input-gallery' value="Movie" id='Movie'/>
          <label htmlFor="Movie" >Movie</label></div>
          <div className='cat'>
          <input type="radio" name='gallery' className='input-gallery' value="food" id='food'/>
          <label htmlFor="food" >Food</label></div>
          <div className='cat'>
          <input type="radio" name='gallery' className='input-gallery' value="travel" id='travel'/>
          <label htmlFor="travel" >Travel</label></div>
        </div>
      </div>
    </div>
  )
}