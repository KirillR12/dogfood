/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-bind */
import { useDispatch } from 'react-redux'
import { setSort } from '../../redux/slices/sortSlices'
import styles from './styles.module.css'

export function FilterBar() {
  const dispatch = useDispatch()

  function disableFilter() {
    dispatch(setSort('Disable'))
  }
  function expensiveFilter() {
    dispatch(setSort('First expensive'))
  }
  function cheapFilter() {
    dispatch(setSort('First cheap'))
  }
  function newFilter() {
    dispatch(setSort('First new'))
  }

  return (
    <span className={styles.container}>
      <h3>Фильтры поиска</h3>
      <button type="button" className={`btn btn-warning ${styles.button}`} onClick={disableFilter}>По умолчанию</button>
      <button type="button" className={`btn btn-warning ${styles.button}`} onClick={expensiveFilter}>Сначала дорогие</button>
      <button type="button" className={`btn btn-warning ${styles.button}`} onClick={cheapFilter}>Сначала дешевые</button>
      <button type="button" className={`btn btn-warning ${styles.button}`} onClick={newFilter}>Сначала новые</button>
    </span>
  )
}
