import React from 'react'

import Title from '../MainPage/Title/Title'
import Text from '../Text/Text'
import OnlineFormContainer from './OnlineForm/OnlineFormContainer'

export const Online = (props) => {
  return (
    <div className='page'>
      <div className="container">
        <Title name = {props.name} />
        <Text textBody = {props.textBody}/>
        <OnlineFormContainer />
      </div>
    </div>
  )
}

export default Online