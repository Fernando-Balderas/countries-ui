import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppState, SortBy, SortAscDesc, Query } from '../types'
import {
  fetchProducts,
  addProduct,
  removeProduct,
  sortProducts,
  updateSortBy,
  updateSortAscDesc,
  updateQuery,
  filterProducts,
} from '../redux/actions'

import Nav from 'components/Nav'

export default function Home() {
  const dispatch = useDispatch()
  const { filtered, inCart, query, sortBy, sortAscDesc } = useSelector(
    (state: AppState) => state.product
  )

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(filterProducts())
    dispatch(sortProducts())
  }, [dispatch, query])

  useEffect(() => {
    // TODO: Possible improvement using selectors
    dispatch(sortProducts())
  }, [dispatch, sortBy, sortAscDesc])

  return (
    <>
      <Nav />
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
      <input
        type="text"
        id="search"
        onChange={(e) => dispatch(updateQuery(e.target.value as Query))}
      />
      <select
        id="sortBy"
        defaultValue={sortBy}
        onBlur={(e) => dispatch(updateSortBy(e.target.value as SortBy))}
      >
        <option value="name">Name</option>
        <option value="area">Area</option>
        <option value="population">Population</option>
      </select>
      <select
        id="sortAscDesc"
        defaultValue={sortAscDesc}
        onBlur={(e) =>
          dispatch(updateSortAscDesc(e.target.value as SortAscDesc))
        }
      >
        <option value="ASC">Asc</option>
        <option value="DESC">Desc</option>
      </select>
      <ul>
        {filtered.map((c) => (
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
