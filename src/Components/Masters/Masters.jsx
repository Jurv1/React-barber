import React from 'react'
import Title from '../MainPage/Title/Title'
import MasterProfile from './MainMasters/MasterProfile'


const Masters = (props) => {

  let mastersElements = props.masters.map(m => <MasterProfile key={m.id} profilePhotoURL={m.profilePhotoURL} name={m.name} city={m.location.city} station={m.location.station} />)
  return (
    <div className="page4">
      <div className='container'>
        <Title className='title' name='Наши мастера' />
        <div className="profile">
          {mastersElements}
        </div>
      </div>
    </div>

  )
}

export default Masters