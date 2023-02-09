/* eslint-disable react/button-has-type */
/* eslint-disable no-self-compare */
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { signIn } from '../../Api'

const SINGIN_QUERY_KEY = 'SINGIN_QUERY_KEY'

export function Login({ setAuth }) {
  const navigate = useNavigate()

  const { isSuccess, mutate, data } = useMutation({
    queryKey: [SINGIN_QUERY_KEY],
    mutationFn: signIn,
  })

  const trySingIn = (e) => {
    e.preventDefault()
    mutate({
      email: document.getElementById('login').value,
      password: document.getElementById('password').value,
    })
  }

  const editState = (e) => {
    e.preventDefault()
    setAuth((prev) => prev !== prev)
  }

  if (isSuccess) {
    console.log('Success')
    localStorage.setItem('token', data.token)
    navigate('/home')
  }
  return (
    <form>
      <input id="login" type="login" placeholder="Введите вашу почту" />
      <input id="password" type="password" placeholder="Введите пароль" />
      <button className="btn" type="submit" onClick={trySingIn}>Войти</button>
      <button className="btn link" type="button" onClick={editState}>Зарегистрироваться</button>
    </form>
  )
}
