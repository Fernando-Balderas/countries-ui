import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState, SortBy, SortAscDesc, Query } from '../types'
import {
  fetchProducts,
  removeProduct,
  sortProducts,
  updateSortBy,
  updateSortAscDesc,
  updateQuery,
  filterProducts,
} from '../redux/actions'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from 'components/NavBar'
import CustomTable from 'components/CustomTable'

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
      <NavBar />
      <Container fluid>
        <h1>Home page</h1>
        <Row>
          <Col>
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
              <option value="region">Region</option>
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
            <CustomTable products={filtered} />
          </Col>
          <Col lg={4}>
            <h2>Cart</h2>
            {inCart.length <= 0 && <div>No products in cart</div>}
            <ul>
              {inCart.map((p) => (
                <li key={`t-${p.cca3}`}>
                  {p.name.common}
                  <button onClick={() => dispatch(removeProduct(p))}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}
