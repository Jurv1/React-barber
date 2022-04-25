import React from 'react'
import SubLink from '../SubLink/SubLink'

import './HeaderMenu'
import MenuItem from './HeaderMenu_item/MenuItem'

const HeaderMenu = (props) => {


    let itemsElements =
        props.items.map(i => <MenuItem face={i.face} link = {i.link} key = {i.id}/>)

    return (
        <div>
            <ul className="menu__list">
                {itemsElements}
            </ul>
        </div>
    )
}


export default HeaderMenu