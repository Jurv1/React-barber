import React from 'react'
import './BurgerComp'

function BurgerComp  (props) {
    return (
        <div>
            <div active={props.active} setActive={props.setActive} className={props.active ? "burger__active" : "burger"}>
                <span className="burger__line first"></span>
                <span className="burger__line second"></span>
                <span className="burger__line third"></span>
                <span className="burger__line fourth"></span>
            </div>
        </div>
    )
}


export default BurgerComp