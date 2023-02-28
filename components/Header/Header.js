/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import styles from './styles.module.css'
import { Search } from '../Search/Search'
import { removeToken, removeUserGroup, removeUserID } from '../../redux/slices/userSlices'

export function Header() {
  const token = useSelector((store) => store.user.token)
  const cart = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const total = cart.length

  const logOff = (e) => {
    e.preventDefault()
    dispatch(removeToken())
    dispatch(removeUserGroup())
    dispatch(removeUserID())
    navigate('/home')
    toast('Вы успешно вышли', { type: 'error' })
  }

  return (
    <header>
      <Link className={styles.logo} to="/home">
        <i className="fa-solid fa-dog">DogFood</i>
        <i className="fa-solid fa-dog" />
      </Link>
      <nav className={styles.menu}>
        {token && <Search />}
        <div>
          {token && (

          <Link to="/addproduct"><h3>➕</h3></Link>

          )}
        </div>
        <div>
          {token && (

          <Link to="/favorite"><h3>❤️</h3></Link>

          )}
        </div>
        {token && (
          <div>
            <Link to="/basket">
              <h3>
                🛒
                {' '}
                {total}
              </h3>
            </Link>
          </div>
        )}

        {token && (<Link to="/profile"><h3>👤</h3></Link>)}
        {!token && <Link to="/modal"><h3>🚪</h3></Link>}
        {token && <Link onClick={logOff}><h3>🚪</h3></Link>}
      </nav>
    </header>
  )
}
