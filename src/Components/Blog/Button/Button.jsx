import React from 'react'
import '../MainBlog/MainBlog'

const Button = (props) => {
    let onSendPost = () =>{
        props.addPost()
    }
    return (
        <div className='button'>
            <button disabled={props.text == ''} onClick={onSendPost} type="submit" className='button__body'>
                <p className='button__text'>
                    {props.button__name}
                </p>
            </button>
        </div>
    )
}

export default Button