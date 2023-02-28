/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react'
import styles from './styles.module.css'
import { Signup } from './Signup'
import { Login } from './Login'

export function Modal() {
  const [auth, setAuth] = useState(true)

  return (
    <div className={styles.modal_cont}>
      <div className={styles.modal}>
        <h2>{auth ? 'Войти' : 'Зарегистрироваться'}</h2>
        {auth
          ? <Login setAuth={setAuth} />
          : <Signup setAuth={setAuth} />}
      </div>
    </div>
  )
}
