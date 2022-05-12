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
import NotFound from 'components/NotFound'
import Loader from 'components/Loader'
import { API_URL } from 'utils/constants'

import { AppState, Country } from '../types'

export default function Product() {
  const { id } = useParams<{ id: string }>()
  const country = useSelector((state: AppState) =>
    state.country.countries.find((p) => p.cca3 === id)
  )
  const [countryReloaded, setCountryReloaded] = useState<Country | undefined>(
    country
  )
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCountry = async () => {
      if (countryReloaded) {
        setLoading(false)
        return
      }
      setLoading(true)
      const req = await fetch(`${API_URL}/v3.1/alpha/${id}`)
      const res = await req.json()
      const [first] = Object.values(res)
      if (first !== 404 && first !== 400) setCountryReloaded(first as Country)
      setLoading(false)
    }
    getCountry()
  }, [id, countryReloaded])

  if (loading) {
    return <Loader />
  }

  if (!loading && !countryReloaded) {
    return <NotFound />
  }

  return (
    <>
      <NavBar />
      <Cart />
      <Container aria-label="Country details page">
        <Row className="justify-content-md-center">
          <Col xs lg="6">
            <CountryCard country={countryReloaded as Country} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
