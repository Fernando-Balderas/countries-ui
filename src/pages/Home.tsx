import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { AppState } from '../types'
import { fetchProducts, removeProduct } from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()
  const product = useSelector((state: AppState) => state.product)

  const handleAddProduct = () => {
    dispatch(fetchProducts())
  }

  return (
    <>
      <h1>Home page</h1>
      <h2>Cart</h2>
      {product.inCart.length <= 0 && <div>No products in cart</div>}
      <ul>
        {product.inCart.map((p) => (
          <li key={`t-${p.cca3}`}>
            {p.name.common}
            <button>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddProduct}>Load products</button>
      <h2>Available Countries</h2>
      <ul>
        {product.countries.map((c) => (
          <li key={c.cca3}>
            {c.flag}
            <Link to={`/products/${c.cca3}`}>{`${c.name.common}`}</Link>
            <button onClick={() => dispatch(removeProduct(c))}>Add</button>
          </li>
        ))}
      </ul>
    </>
  )
}
