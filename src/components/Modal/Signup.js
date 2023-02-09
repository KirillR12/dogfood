import { useMutation } from '@tanstack/react-query'
import { signUp } from '../../Api'

const SINGUP_QUERY_KEY = 'SINGUP_QUERY_KEY'

export function Signup({ setAuth }) {
  const {
    isSuccess, mutate, data, isError,
  } = useMutation({
    queryKey: [SINGUP_QUERY_KEY],
    mutationFn: signUp,
  })

  const trySingUp = (e) => {
    e.preventDefault()
    mutate({
      email: document.getElementById('login').value,
      password: document.getElementById('password').value,
      group: document.getElementById('group').value,
    })
  }

  if (isSuccess) {
    localStorage.setItem('token', data.token)
  }
  if (isError) {
    return (
      <form>
        <input id="login" placeholder="Email" />
        <input id="password" placeholder="Password" type="password" />
        <input id="group" placeholder="Group" />
        <button className="btn" type="submit" onClick={trySingUp}>Зарегистрироваться</button>
        <button className="btn link" type="button" onClick={() => { setAuth((prev) => !prev) }}>Войти</button>
      </form>
    )
  }
  return (
    <form>
      <input id="login" type="email" placeholder="Введите вашу почту" />
      <input id="password" type="password" placeholder="Введите пароль" />
      <input id="group" placeholder="Group" />
      <button className="btn" type="submit" onClick={trySingUp}>Зарегистрироваться</button>
      <button className="btn link" type="button" onClick={() => { setAuth((prev) => !prev) }}>Войти</button>
    </form>
  )
}
