import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Badge from 'react-bootstrap/Badge'

import { Currencies, Languages, Product } from 'types'

type ProductCardProps = {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  // TODO: Fix missing country data when reload or go back

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
    <Card>
      <Card.Img
        variant="top"
        className="mx-auto my-1 img-thumbnail"
        src={product.flags.png}
        style={{ width: '70%' }}
      />
      <Card.Header>
        <Card.Title>{product.name.common}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.name.official}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Language: {product.languages && makeLanguages(product.languages)}
          </ListGroupItem>
          <ListGroupItem>
            Region: {product.region}
            {product.subregion && ` (${product.subregion})`}
          </ListGroupItem>
          <ListGroupItem>Population: {product.population}</ListGroupItem>
          <ListGroupItem>Area: {product.area}</ListGroupItem>
          <ListGroupItem>
            Capital:{' '}
            {product.capital && makeComponentsFromArray(product.capital)}
          </ListGroupItem>
          <ListGroupItem>
            Currency: {product.currencies && makeCurrencies(product.currencies)}
          </ListGroupItem>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="text-center">
        <Card.Link href={product.maps.googleMaps}>Google Maps</Card.Link>
        <Card.Link href={product.maps.openStreetMaps}>OpenStreetMaps</Card.Link>
      </Card.Footer>
    </Card>
  )
}

export default ProductCard
