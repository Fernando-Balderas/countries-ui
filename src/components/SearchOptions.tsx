import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import { AppState, Query } from 'types'
import { filterCountries } from 'redux/actions'

function SearchOptions() {
  const dispatch = useDispatch()
  const { query } = useSelector((state: AppState) => state.country)
  return (
    <Form aria-label="Search and filter options">
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Form.Group as={Col} lg={6} md={6} className="px-0">
          <Form.Label id="search-label" visuallyHidden>
            Search text
          </Form.Label>
          <Form.Control
            id="search"
            type="text"
            placeholder="Search by name, region or subregion"
            value={query}
            onChange={(e) => dispatch(filterCountries(e.target.value as Query))}
            style={{ borderRadius: '20px' }}
            aria-labelledby="search-label"
          />
        </Form.Group>
      </Row>
    </Form>
  )
}

export default SearchOptions
