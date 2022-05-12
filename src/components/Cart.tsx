import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Stack from 'react-bootstrap/Stack'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

import { AppState, Country } from 'types'
import { removeCountry, updateCartOpen } from '../redux/actions'

function Cart() {
  const dispatch = useDispatch()
  const { inCart } = useSelector((state: AppState) => state.country)
  const { cartOpen } = useSelector((state: AppState) => state.ui)

  const handleClose = () => dispatch(updateCartOpen(false))

  const makeCard = (country: Country) => (
    <Alert key={`incart-${country.cca3}`} variant="light" className="p-0">
      {`${country.flag} ${country.name.common}`}
      <Button
        variant="outline-danger"
        className="mx-1"
        aria-label="Remove country"
        style={{ float: 'right' }}
        onClick={() => dispatch(removeCountry(country))}
      >
        Remove
      </Button>
    </Alert>
  )

  return (
    <Offcanvas
      show={cartOpen}
      placement="end"
      onHide={handleClose}
      aria-labelledby="cart-title"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title as="h2" id="cart-title">
          Favourites
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={0} className="mx-auto">
          {inCart.length <= 0 && <div>Empty</div>}
          {inCart.map((country) => makeCard(country))}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Cart
