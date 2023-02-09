/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from '../../Api'

export function Profile() {
  const USERINFO_QUERY_KEY = 'USERINFO_QUERY_KEY'

  const {
    data, error, isSuccess, isError,
  } = useQuery({
    queryKey: [USERINFO_QUERY_KEY],
    queryFn: getUserInfo,
  })

  if (isError) return <p>{`${error}`}</p>
  if (isSuccess) {
    return (
      <div>
        <h1>Личный кабинет</h1>
        <p>
          Name:
          {data.name}
        </p>
        <p>
          About:
          {data.about}
        </p>
        <p>
          ID:
          {data.id}
        </p>
        <p>
          EMail:
          {data.email}
        </p>
        <p>
          Group:
          {data.group}
        </p>
        <button className="btn" type="submit">
          Выйти из аккаунта
        </button>
      </div>
    )
  }
}
