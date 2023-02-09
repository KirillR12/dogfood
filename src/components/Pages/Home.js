import { Link } from 'react-router-dom'

export function Home() {
  const auth = localStorage.getItem('token')

  return (
    <div>
      <h1>Здравствуйте, вас приветствует магазин DogFood</h1>
      {auth
        ? (
          <button className="btn" type="submit">
            <Link to="/catalog">Перейти в каталог</Link>
          </button>
        ) : (
          <>
            <h2>Для просмотра каталога требуется авторизация:</h2>
            <button className="btn" type="submit">
              <Link to="/modal">Авторизироваться</Link>
            </button>
          </>
        )}
    </div>
  )
}
