import React from 'react'

const Text = (props) => {
  return (
    <div className='container'>
        <div className="text">
            <p className="text__body">
                {props.textBody}
            </p>
        </div>
    </div>
  )
}

export default Text