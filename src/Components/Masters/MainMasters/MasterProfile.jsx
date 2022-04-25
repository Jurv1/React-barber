import React from 'react'


export const MasterProfile = (props) => {
    
    return (
        <div className="container">
            <div className='profile__row'>
                <div className="profile__master">
                    <div className="profile__img">
                        <img className='image' src={props.profilePhotoURL} alt="Фото профиля" />
                    </div>
                    <div className="profile__appointment">
                        <a href="/online" className="profile__to__appointment">Записаться</a>
                    </div>
                </div>
                <div className="profile__info">
                    <div className="profile__name">
                        {props.name}
                    </div>
                    <div className="profile__city">
                        {props.city}
                    </div>
                    <div className="profile__station">
                        {props.station}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MasterProfile