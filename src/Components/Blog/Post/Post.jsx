import React from 'react'
import {ImUser} from 'react-icons/im'

const Post = (props) => {
  return (
    <div className='container'>
        <div className="post__row">
            <div className="post__avatar">
                <ImUser className='post__icon'/>
            </div>
            <div className="post__text">
                <div className="author">
                    {props.author}
                </div>
                <div className="message">
                    {props.message}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post