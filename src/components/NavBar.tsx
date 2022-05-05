import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { updateThemeKey } from 'redux/actions'
import ThemeContext from 'contexts/Theme'

import { ThemeKey, ThemeColors } from 'types'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import Button from 'react-bootstrap/Button'
import { FaGlobeEurope, FaShoppingCart } from 'react-icons/fa'

function NavBar() {
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  // const { themeKey } = useSelector((state: AppState) => state.ui)
  // TODO: Fix font color
  return (
    <Navbar style={{ background: theme.background, color: theme.foreground }}>
      <Container>
        <Navbar.Brand href="#home">
          <FaGlobeEurope />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <FaPalette /> */}
            <NavDropdown title="Themes" id="collasible-nav-dropdown">
              {Object.entries(ThemeColors).map(([k, v], i) => (
                <NavDropdown.Item
                  key={i}
                  onClick={() => dispatch(updateThemeKey(v as ThemeKey))}
                >
                  {k}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Navbar.Text>
              <FaShoppingCart />
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
