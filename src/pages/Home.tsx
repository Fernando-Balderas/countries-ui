import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { fetchProducts, sortProducts, filterProducts } from '../redux/actions'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import NavBar from 'components/NavBar'
import CustomTable from 'components/CustomTable'
import Cart from 'components/Cart'
import SearchOptions from 'components/SearchOptions'

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
          <Col lg={10} className="mx-auto my-3">
            <SearchOptions />
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <CustomTable products={filtered} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
