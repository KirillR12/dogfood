/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react'
import './Modal.css'
import { useNavigate } from 'react-router'
import { Signup } from './Signup'
import { Login } from './Login'

export function Modal() {
  const [modalActive, setModalActive] = useState(true)

  const [auth, setAuth] = useState(true)

  const navigate = useNavigate()

  const close = () => {
    setModalActive(false)
    navigate('/home')
  }

  const style = {
    display: modalActive && 'flex',
  }
  return (
    <div className="modal_cont" style={style}>
      <div className="modal">
        <div className="modal_close" onClick={close} />
        <h2>{auth ? 'Войти' : 'Зарегистрироваться'}</h2>
        {auth
          ? <Login setAuth={setAuth} />
          : <Signup setAuth={setAuth} />}
      </div>
    </div>
  )
}
