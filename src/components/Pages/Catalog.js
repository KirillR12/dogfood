/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../Api'
import { CatalogButton } from './CatalogButton/CatalogButton'

import styles from './styles.module.css'

export const GET_PRODUCTS_QUERY_KEY = 'PRODUCTS_QUERY_KEY'

export function Catalog() {
  const {
    data, error, isSuccess, isError,
  } = useQuery({
    queryKey: [GET_PRODUCTS_QUERY_KEY],
    queryFn: getProducts,
  })

  if (isError) return <p>{`${error}`}</p>
  if (isSuccess) {
    const jsx = []
    for (const el of data.products) {
      jsx.push(
        <div key={el._id} className="card-deck">
          <div className="card">
            <img src={el.pictures} className="imgcard card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">
                {el.price}
                {' '}
                Рублей
              </p>
              <CatalogButton el={el} />
            </div>
          </div>
        </div>,
      )
    }
    return (
      <main>
        <h1>Каталог товаров</h1>
        <div className={styles.container}>{jsx}</div>
      </main>
    )
  }
}
