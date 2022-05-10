import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from 'components/NavBar'
import ProductCard from 'components/ProductCard'

import { AppState } from '../types'

export default function Product() {
  const { id } = useParams<{ id: string }>()

  const product = useSelector((state: AppState) =>
    state.product.countries.find((p) => p.cca3 === id)
  )

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      <NavBar />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <ProductCard product={product} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
