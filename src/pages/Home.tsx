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
import Footer from 'components/Footer'

import { AppState, FnPaginate } from '../types'
import {
  fetchCountries,
  sortCountries,
  filterCountries,
} from '../redux/actions'

export default function Home() {
  const dispatch = useDispatch()
  const { filtered, query, sort } = useSelector(
    (state: AppState) => state.country
  )

  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  useEffect(() => {
    dispatch(filterCountries())
    dispatch(sortCountries())
  }, [dispatch, query])

  useEffect(() => {
    // TODO: Possible improvement using selectors
    dispatch(sortCountries())
  }, [dispatch, sort])

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(10)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const paginated = filtered.slice(indexOfFirstProduct, indexOfLastProduct)

  // TODO: Fix duplicated countries in table and cart when go back to home page

  const paginate: FnPaginate = ({ pageNumber }) => setCurrentPage(pageNumber)

  return (
    <>
      <NavBar />
      <Cart />
      <Container fluid aria-label="Home page">
        <Row>
          <Col lg={10} className="mx-auto my-3">
            <SearchOptions />
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <CustomTable
              countries={paginated}
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
      <Footer />
    </>
  )
}
