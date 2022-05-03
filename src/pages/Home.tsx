import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppState, SortBy } from '../types'
import {
  fetchProducts,
  addProduct,
  removeProduct,
  sortProducts,
  updateSortBy,
} from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()
  const { countries, inCart } = useSelector((state: AppState) => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const handleSortBy = useCallback(
    (sortBy: SortBy) => {
      // TODO: Possible improvement using selectors
      dispatch(updateSortBy(sortBy))
      dispatch(sortProducts())
    },
    [dispatch]
  )

  return (
    <>
      <h1>Home page</h1>
      <h2>Cart</h2>
      {inCart.length <= 0 && <div>No products in cart</div>}
      <ul>
        {inCart.map((p) => (
          <li key={`t-${p.cca3}`}>
            {p.name.common}
            <button onClick={() => dispatch(removeProduct(p))}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Available Countries</h2>
      <select
        id="sortBy"
        onBlur={(e) => handleSortBy(e.target.value as SortBy)}
      >
        <option value="name">Name</option>
        <option value="area">Area</option>
        <option value="population">Population</option>
      </select>
      <ul>
        {countries.map((c) => (
          <li key={c.cca3}>
            {c.flag}
            <Link to={`/products/${c.cca3}`}>{`${c.name.common}`}</Link>
            {` ${c.area} - ${c.population}`}
            <button onClick={() => dispatch(addProduct(c))}>Add</button>
          </li>
        ))}
      </ul>
    </>
  )
}
