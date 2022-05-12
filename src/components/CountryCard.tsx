import React from 'react'
import { useHistory } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import { Currencies, Languages, Country } from 'types'

type CountryCardProps = {
  country: Country
}

function CountryCard({ country }: CountryCardProps) {
  const history = useHistory()
  const makeLanguages = (languages: Languages) => {
    return Object.values(languages).map((lang) => (
      <Badge pill bg="secondary" key={lang}>
        {lang}
      </Badge>
    ))
  }

  const makeComponentsFromArray = (arr: string[]) => {
    return arr.map((elem) => (
      <Badge pill bg="secondary" key={elem}>
        {elem}
      </Badge>
    ))
  }

  const makeCurrencies = (currencies: Currencies) => {
    return Object.values(currencies).map((cur) => (
      <Badge pill bg="secondary" key={cur.name}>
        {`${cur.symbol} - ${cur.name}`}
      </Badge>
    ))
  }

  return (
    <Card aria-labelledby="card-title">
      <Card.Img
        variant="top"
        className="mx-auto my-1 img-thumbnail"
        src={country.flags.png}
        alt="Flag image"
        style={{ width: '70%' }}
      />
      <Card.Header>
        <Card.Title id="card-title">{country.name.common}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {country.name.official}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush text-center">
          <ListGroupItem>
            Language: {country.languages && makeLanguages(country.languages)}
          </ListGroupItem>
          <ListGroupItem>
            Region: {country.region}
            {country.subregion && ` (${country.subregion})`}
          </ListGroupItem>
          <ListGroupItem>Population: {country.population}</ListGroupItem>
          <ListGroupItem>Area: {country.area}</ListGroupItem>
          <ListGroupItem>
            Capital:{' '}
            {country.capital && makeComponentsFromArray(country.capital)}
          </ListGroupItem>
          <ListGroupItem>
            Currency: {country.currencies && makeCurrencies(country.currencies)}
          </ListGroupItem>
          <ListGroupItem>
            <Card.Link aria-label="Google maps" href={country.maps.googleMaps}>
              Google Maps
            </Card.Link>
            <Card.Link
              aria-label="Openstreet maps"
              href={country.maps.openStreetMaps}
            >
              OpenStreetMaps
            </Card.Link>
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button variant="secondary" onClick={history.goBack}>
          Back
        </Button>
      </Card.Footer>
    </Card>
  )
}

export default CountryCard
