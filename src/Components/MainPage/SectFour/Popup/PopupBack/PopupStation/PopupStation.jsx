import React from 'react'

export const PopupStation = (props) => {
    return (
        <div>
            <div class="popup__station station">
                <h5>{props.station}</h5>
            </div>
        </div>
    )
}

export default PopupStation