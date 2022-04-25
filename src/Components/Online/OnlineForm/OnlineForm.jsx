import React from 'react'
import { connect } from 'react-redux'


export function OnlineForm  (props)  {
  
  let mastersElements = props.masters.map(m => <option key={m.id} >{m.name}</option>)
  let timesElements = props.time.map(t => <option key={t.id} disabled={t.free}>{t.time}</option>)
  const [input, setInput] = React.useState('')
  const [input2, setInput2] = React.useState('')
  return (
    <div className='container'>
      <form  action="#" method='' className="online__form">
        <div className="form__man">
          <p>Ваши контактные данные</p>
          <input value={input} onChange={e => setInput(e.target.value)} type="tel" name="login" placeholder='Телефон' />
          <input value={input2} onChange={l => setInput2(l.target.value)} type="text" name="surname" placeholder='Фамилия' />
        </div>
        <div className="form__master">
          <p>Выберете мастера и время записи</p>
          <select name="master" id="">
            {mastersElements}
          </select>
          <select name="time" id="">
            {timesElements}
          </select>
        </div>
        <button disabled={(!input) || (!input2)} onClick={alert} type='submit' className='button__body'>
          <p className="button__text">
            {props.name}
          </p>
        </button>
      </form>
    </div>
  )
}

export default OnlineForm