import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import { AppState, Query } from 'types'
import { updateQuery } from 'redux/actions'

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
            onChange={(e) => dispatch(updateQuery(e.target.value as Query))}
            style={{ borderRadius: '20px' }}
            aria-labelledby="search-label"
          />
        </Form.Group>
        {/* <Form.Group as={Col} lg={2} md={2} sm={6} className="px-0">
          <Form.Label id="sort-by-label" visuallyHidden>
            Sort by
          </Form.Label>
          <Form.Select
            id="sortBy"
            defaultValue={sortBy}
            onBlur={(e) => dispatch(updateSortBy(e.target.value as SortBy))}
            aria-labelledby="sort-by-label"
          >
            <option value="name">Name</option>
            <option value="area">Area</option>
            <option value="population">Population</option>
            <option value="region">Region</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} lg={2} md={2} sm={6} className="px-0">
          <Form.Label id="sort-asc-desc-label" visuallyHidden>
            Sort Ascending Descending
          </Form.Label>
          <Form.Select
            id="sortAscDesc"
            defaultValue={sortAscDesc}
            onBlur={(e) =>
              dispatch(updateSortAscDesc(e.target.value as SortAscDesc))
            }
            aria-labelledby="sort-asc-desc-label"
          >
            <option value="ASC">Asc</option>
            <option value="DESC">Desc</option>
          </Form.Select>
        </Form.Group> */}
      </Row>
    </Form>
  )
}

export default SearchOptions
