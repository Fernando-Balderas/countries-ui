import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateThemeKey } from 'redux/actions'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Badge from 'react-bootstrap/Badge'
import {
  FaGlobeEurope,
  FaShoppingCart,
  FaPalette,
  FaCircle,
} from 'react-icons/fa'
import ThemeContext, { themes } from 'contexts/Theme'

import { ThemeKey, ThemeColors, AppState } from 'types'
import { updateCartOpen } from '../redux/actions'

function NavBar() {
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  const { inCart } = useSelector((state: AppState) => state.country)

  const handleSwitchTheme = (v: ThemeKey) => () => dispatch(updateThemeKey(v))
  const handleShowCart = () => dispatch(updateCartOpen(true))
  // TODO: Use classes to switch styles
  return (
    <Navbar sticky="top" style={{ background: theme.background }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: theme.foreground }}>
          <FaGlobeEurope size="1.6em" /> Countries
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <NavDropdown
              title={
                <FaPalette size="1.6em" style={{ color: theme.foreground }} />
              }
              id="collasible-nav-dropdown"
              style={{
                color: theme.foreground,
              }}
            >
              {Object.entries(ThemeColors).map(([k, v], i) => (
                <NavDropdown.Item key={i} onClick={handleSwitchTheme(v)}>
                  <FaCircle style={{ color: themes[v].background }} /> {k}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link onClick={handleShowCart}>
              <FaShoppingCart
                size="1.6em"
                style={{ color: theme.foreground }}
              />
              {inCart.length > 0 && <Badge bg="danger">{inCart.length}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
