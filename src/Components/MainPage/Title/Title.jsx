import React from 'react'
import c from './Title.module.scss'

const Title = (props) => {
    return (
        <div>
            <div className={c.title}>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default Title