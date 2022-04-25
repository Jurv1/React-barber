import React from 'react'
import PopupAddr from './PopupAddr/PopupAddr'
import './PopupBack'
import PopupStation from './PopupStation/PopupStation'

const PopupBack = (props) => {
    let stationElements = props.stations.map(i => <PopupStation station={i.station} />)
    let addressElements = props.addresses.map(i => <PopupAddr address={i.address} />)
    return (
        <div>
            <div id="popup" class="popup">
                <a href="#header" class="popup__area"></a>
                <div class="popup__body">
                    <div class="popoup__content">
                        <a href="#header" class="popup__close">X</a>
                        <div class="popup__title">
                            Наши предприятия
                        </div>
                        <div class="popup__block">
                            <div class="popup__place place">
                                <div class="popup__text">
                                    {stationElements[0]}
                                    {addressElements[0]}
                                </div>
                                <div class="popup__text">
                                    {stationElements[1]}
                                    {addressElements[1]}
                                </div>
                                <div class="popup__text">
                                    {stationElements[2]}
                                    {addressElements[2]}
                                </div>
                                <div class="popup__text">
                                    {stationElements[3]}
                                    {addressElements[3]}
                                </div>
                                <div class="popup__text">
                                    {stationElements[4]}
                                    {addressElements[4]}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupBack