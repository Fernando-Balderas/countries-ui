import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState, SortBy, SortAscDesc, Query } from '../types'
import {
  fetchProducts,
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
import Cart from 'components/Cart'

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
      <Cart inCart={inCart} />
      <Container fluid>
        <Row>
          <Col lg={10} className="mx-auto">
            <h1>Countries</h1>
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
        </Row>
      </Container>
    </>
  )
}
