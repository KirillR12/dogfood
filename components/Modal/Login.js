/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-self-compare */
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { signIn } from '../../Api'
import { setToken, setUserGroup, setUserID } from '../../redux/slices/userSlices'

const SINGIN_QUERY_KEY = 'SINGIN_QUERY_KEY'

export function Login({ setAuth }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    mutate, isSuccess,
  } = useMutation({
    queryKey: [SINGIN_QUERY_KEY],
    mutationFn: signIn,
    onSuccess: (data) => {
      dispatch(setToken(data.token))
      dispatch(setUserGroup(data.data.group))
      dispatch(setUserID(data.data._id))
      toast('Вы успешно вошли', { type: 'success' })
    },
    onError: (error) => {
      toast(`${error.message}`, { type: 'error' })
    },
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
    navigate('/home')
  }
  return (
    <form>
      <input id="login" type="login" placeholder="Введите вашу почту" />
      <input id="password" type="password" placeholder="Введите пароль" />
      <button className="btn btn-warning" type="submit" onClick={trySingIn}>Войти</button>
      <button className="btn btn-warning" type="button" onClick={editState}>Зарегистрироваться</button>
    </form>
  )
}
