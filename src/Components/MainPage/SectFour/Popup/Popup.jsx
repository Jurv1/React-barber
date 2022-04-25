import React from 'react'

const Popup = (props) => {
    return (
        <div>
            <div className="button">
                <a href="#popup" className="button_click">{props.name}</a>
            </div>
        </div>
    )
}

export default Popup