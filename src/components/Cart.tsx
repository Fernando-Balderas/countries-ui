import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

import { AppState, Country, Countries } from 'types'
import { removeCountry, updateCartOpen } from '../redux/actions'

type CartProps = {
  inCart: Countries
}

function Cart({ inCart }: CartProps) {
  const dispatch = useDispatch()
  const { cartOpen } = useSelector((state: AppState) => state.ui)

  const handleClose = () => dispatch(updateCartOpen(false))

  const makeCard = (country: Country) => (
    <Alert key={`incart-${country.cca3}`} variant="light" className="p-0">
      {`${country.flag} ${country.name.common}`}
      <Button
        variant="outline-danger"
        className="mx-1"
        style={{ float: 'right' }}
        onClick={() => dispatch(removeCountry(country))}
      >
        Remove
      </Button>
    </Alert>
  )

  return (
    <Offcanvas show={cartOpen} placement="end" onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title as="h2">Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={0} className="mx-auto">
          {inCart.length <= 0 && <div>No countries in cart</div>}
          {inCart.map((country) => makeCard(country))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart
