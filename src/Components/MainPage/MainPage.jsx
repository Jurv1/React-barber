import React from 'react'
import SectOne from './SectOne/SectOne'
import SectTwo from './SectTwo/SectTwo'
import './MainPage'
import SectThree from './SectThree/SectThree'
import SectFour from './SectFour/SectFour'
import PopupBack from './SectFour/Popup/PopupBack/PopupBack'
import IBG from './IBG/IBG'
import NightCity from '../../night_city.png'


const MainPage = (props) => {


    return (
        <div>
            <main className="page">
                <div class="main_block">

                    <SectOne texts={props.texts} amounts={props.amounts} />
                    <SectTwo texts={props.texts} amounts={props.amounts} />
                    <SectThree />
                    <SectFour />
                    
                </div>

                <div className="main_img _ibg">
                        <img src={NightCity} alt="cover" />
                    </div>
            </main>

            <PopupBack stations={props.stations} addresses={props.addresses} />
        </div>
    )
}

export default MainPage