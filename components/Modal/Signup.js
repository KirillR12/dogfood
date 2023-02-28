/* eslint-disable no-underscore-dangle */
import { useMutation } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { signUp } from '../../Api'
import { setToken, setUserGroup, setUserID } from '../../redux/slices/userSlices'

const SINGUP_QUERY_KEY = 'SINGUP_QUERY_KEY'

export function Signup({ setAuth }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    isSuccess, mutate,
  } = useMutation({
    queryKey: [SINGUP_QUERY_KEY],
    mutationFn: signUp,
    onSuccess: (data) => {
      dispatch(setToken(data.token))
      dispatch(setUserGroup(data.data.group))
      dispatch(setUserID(data.data._id))
    },
  })

  const trySingUp = (e) => {
    e.preventDefault()
    mutate({
      email: e.login,
      password: e.password,
      group: e.group,
    })
  }

  if (isSuccess) {
    navigate('/home')
  }
  return (
    <form>
      <input id="login" type="email" placeholder="Введите вашу почту" />
      <input id="password" type="password" placeholder="Введите пароль" />
      <input id="group" placeholder="Group" />
      <button className="btn btn-warning" type="submit" onClick={trySingUp}>Зарегистрироваться</button>
      <button className="btn btn-warning" type="button" onClick={() => { setAuth((prev) => !prev) }}>Войти</button>
    </form>
  )
}
