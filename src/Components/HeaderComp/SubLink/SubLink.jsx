import React from 'react'
import './SubLink'

const SubLink = (props) => {
    return (
        <div>
            <li>
                <a href="#" className="menu__sub-link">{props.face}</a>
            </li>
        </div>
    )
}


export default SubLink