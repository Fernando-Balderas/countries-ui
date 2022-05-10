import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { pickSome } from 'utils/services'

import { Countries } from 'types'
import { addCountry } from 'redux/actions'

const humanFormat = require('human-format')

type CustomTableProps = {
  countries: Countries
  currentIndex: number
}

const titles = [
  '#',
  'Flag',
  'Name',
  'Language',
  'Population',
  'Area',
  'Region',
  'Actions',
]

function CustomTable({ countries, currentIndex }: CustomTableProps) {
  const dispatch = useDispatch()

  const makeSomeComponents = (arr: string[]) => {
    const newArr = pickSome(arr, 2)
    return newArr.map((l) => <li key={l}>{l}</li>)
  }

  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          {titles.map((t) => (
            <th key={t}>{t}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {countries.map((country, i) => (
          <tr key={country.cca3}>
            <td>{currentIndex + i + 1}</td>
            <td>{country.flag}</td>
            <td>
              <Link
                to={`/countries/${country.cca3}`}
              >{`${country.name.common}`}</Link>
            </td>
            <td>
              <ul>
                {country.languages &&
                  makeSomeComponents(Object.values(country.languages))}
              </ul>
            </td>
            <td>{humanFormat(country.population)}</td>
            <td>{`${country.area} `}&#13218;</td>
            <td>{country.region}</td>
            <td>
              <Button onClick={() => dispatch(addCountry(country))}>Add</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CustomTable
