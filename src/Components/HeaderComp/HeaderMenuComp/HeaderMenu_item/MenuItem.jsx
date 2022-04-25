import React from 'react'
import './MenuItem'

const MenuItem = (props) => {

    
    return (
        <div>
            <li id='item' className="menu__item">
                <a href={props.link} className="menu__link">{props.face}</a>
            </li>
        </div>
    )
}



export default MenuItem