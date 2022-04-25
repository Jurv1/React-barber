import React from 'react'
import BurgerComp from './Burger/BurgerComp'
import './Header'
import Logo from './HeaderLogo/Logo'
import HeaderMenu from './HeaderMenuComp/HeaderMenu'


function Header  (props)  {
    const [active, setActive] = React.useState(false)
    return (
        <div className='header'>
            <div className="header__row">
                <Logo />
                <BurgerComp active={active} setActive={setActive}  />
                <nav className={active.toString() ? "menu__body" : "menu__body__active"} onClick={() => setActive(!active)}>
                    <HeaderMenu items={props.items} />
                </nav>
            </div>
        </div>
    )
}



export default Header