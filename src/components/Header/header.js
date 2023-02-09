/* eslint-disable jsx-a11y/anchor-is-valid */
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export function Header() {
  const test = localStorage.getItem('token')
  const [prov, setProv] = useState(test)

  const cart = useSelector((store) => store.cart)
  const summ = cart.length

  const navigate = useNavigate()

  const logIn = (e) => {
    e.preventDefault()
    navigate('/modal')
    setProv(true)
  }

  const logOff = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    localStorage.removeItem('cart')
    setProv('')
    navigate('/home')
  }

  const Profile = (e) => {
    e.preventDefault()
    navigate('profile')
  }

  return (
    <header>
      <Link className="logo" to="/catalog">
        <i className="fa-solid fa-dog">DogFood</i>
        <i className="fa-solid fa-dog" />
      </Link>
      <nav className="menu">
        <div>
          {prov && (
          <Link to="/basket">
            <h4>
              Корзина
              {' '}
              {summ}
            </h4>
          </Link>
          )}
        </div>
        {!prov && <Link to="/" className="btn btn-danger" onClick={logIn}>Войти</Link>}
        {prov && <a href="" type="button" className="btn btn-danger" onClick={Profile}>Профиль</a>}
        {prov && <a href="" type="button" className="btn btn-danger" onClick={logOff}>Выйти</a>}
      </nav>
    </header>
  )
}
