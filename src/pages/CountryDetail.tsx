import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavBar from 'components/NavBar'
import CountryCard from 'components/CountryCard'
import Footer from 'components/Footer'
import Cart from 'components/Cart'

import { AppState, Country } from '../types'

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const country = useSelector((state: AppState) =>
    state.country.countries.find((p) => p.cca3 === id)
  )
  const [countryOrItem, setCountryOrItem] = useState<Country | undefined>(
    country
  )

  useEffect(() => {
    const itemKey = 'country'
    let item = localStorage.getItem(itemKey)
    if (country && item === null) {
      localStorage.setItem(itemKey, JSON.stringify(country))
    }
    if (!country && item) {
      item = localStorage.getItem(itemKey)
      if (item) {
        const countryItem = JSON.parse(item) as Country
        setCountryOrItem(countryItem)
      }
    }

    return () => {
      localStorage.removeItem(itemKey)
    }
  }, [country])

  if (!countryOrItem) {
    return <div>Country not found</div>
  }

  return (
    <>
      <NavBar />
      <Cart />
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <CountryCard country={countryOrItem} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
