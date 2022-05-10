import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from 'components/NavBar'
import CustomTable from 'components/CustomTable'
import Cart from 'components/Cart'
import SearchOptions from 'components/SearchOptions'
import CustomPagination from 'components/CustomPagination'

import { AppState, FnPaginate } from '../types'
import { fetchProducts, sortProducts, filterProducts } from '../redux/actions'

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

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(10)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const paginated = filtered.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate: FnPaginate = ({ pageNumber }) => setCurrentPage(pageNumber)

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
            <CustomTable
              products={paginated}
              currentIndex={indexOfFirstProduct}
            />
            <CustomPagination
              totalProducts={filtered.length}
              productsPerPage={productsPerPage}
              currentPage={currentPage}
              paginate={paginate}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
