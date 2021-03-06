import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateThemeKey } from 'redux/actions'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { FaGlobeEurope, FaHeart, FaPalette, FaCircle } from 'react-icons/fa'
import ThemeContext, { themes } from 'contexts/Theme'
import { useHistory } from 'react-router-dom'

import { ThemeKey, ThemeColors, AppState } from 'types'
import { updateCartOpen } from '../redux/actions'

function NavBar() {
  const history = useHistory()
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  const { inCart } = useSelector((state: AppState) => state.country)

  const handleSwitchTheme = (v: ThemeKey) => () => dispatch(updateThemeKey(v))
  const handleShowCart = () => dispatch(updateCartOpen(true))
  // TODO: Use classes to switch styles
  return (
    <Navbar
      sticky="top"
      style={{ background: theme.background }}
      aria-label="Main menu"
    >
      <Container>
        <Navbar.Brand
          as={Button}
          onClick={() => history.push('/')}
          className="nav-brand"
          style={{ color: theme.foreground }}
          aria-label="Home page"
        >
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
              aria-label="Themes"
              style={{
                color: theme.foreground,
              }}
            >
              {Object.entries(ThemeColors).map(([k, v], i) => (
                <NavDropdown.Item
                  key={i}
                  aria-label={`Theme ${v}`}
                  onClick={handleSwitchTheme(v)}
                >
                  <FaCircle style={{ color: themes[v].background }} /> {k}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link aria-label="Cart" onClick={handleShowCart}>
              <FaHeart size="1.6em" style={{ color: theme.foreground }} />
              {inCart.length > 0 && <Badge bg="danger">{inCart.length}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
