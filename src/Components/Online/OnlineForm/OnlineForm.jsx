import React from 'react'


export function OnlineForm(props) {
  const initialValues = { login: "", surname: "" }
  const [formValues, setFormValues] = React.useState(initialValues)
  const [formErr, setFormErr] = React.useState({})
  let mastersElements = props.masters.map(m => <option key={m.id} >{m.name}</option>)
  let timesElements = props.time.map(t => <option key={t.id} disabled={t.free}>{t.time}</option>)
  const [submit, setSubmit] = React.useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
    console.log(formValues)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErr(validator(formValues))
    setSubmit(true)
  }
  const validator = (values) => {
    const err = {}
    const regularEx1 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
    if (!values.surname) {
      err.surname = "Фамилия не введена"
    }
    if (!values.login) {
      err.login = "Телефон не введен"
    } else if (!regularEx1.test(values.login)) {
      err.login = "Невалидный номер"
    }
    return err
  }

  React.useEffect(() => {
    console.log(formErr)
    if (Object.keys(formErr).length === 0 && submit) {
      console.log(formValues)
    }
  }, [formErr])

  return (
    <div className='container'>
      <form action="#" onSubmit={handleSubmit} className="online__form">
        <div className="form__man">
          <p>Ваши контактные данные</p>
          <input value={formValues.login} onChange={handleChange} type="tel" name="login" placeholder='Телефон' />
          <p>{formErr.login}</p>
          <input value={formValues.surname} onChange={handleChange} type="text" name="surname" placeholder='Фамилия' />
          <p>{formErr.surname}</p>
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
        <button type='submit' className='button__body'>
          <p className="button__text">
            {props.name}
          </p>
        </button>
      </form>
    </div>
  )
}

export default OnlineForm