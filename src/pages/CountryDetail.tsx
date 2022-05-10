import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from 'components/NavBar'
import CountryCard from 'components/CountryCard'
import Footer from 'components/Footer'

import { AppState } from '../types'

export default function Product() {
  const { id } = useParams<{ id: string }>()

  const country = useSelector((state: AppState) =>
    state.country.countries.find((p) => p.cca3 === id)
  )

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <>
      <NavBar />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <CountryCard country={country} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
