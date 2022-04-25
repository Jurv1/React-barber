import React from 'react'
import c from './Title2.module.scss'

const Title2 = (props) => {
    return (
        <div>
            <div className={c.title}>
                <h1>{props.name}</h1>
            </div>
        </div>
    )
}

export default Title2