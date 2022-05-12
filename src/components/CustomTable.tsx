import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { capitalizeFirstLetter, pickSome } from 'utils/services'
import ThemeContext from 'contexts/Theme'
import { FaSort, FaArrowUp, FaArrowDown } from 'react-icons/fa'

import { AppState, Countries, SortAscDesc, SortBy } from 'types'
import { addCountry, updateSort } from 'redux/actions'

const humanFormat = require('human-format')

type CustomTableProps = {
  countries: Countries
  currentIndex: number
}

const titles = [
  '#',
  'flag',
  'name',
  'language',
  'population',
  'area',
  'region',
  'actions',
]

const sortLabels: SortBy[] = ['name', 'population', 'area', 'region']

function CustomTable({ countries, currentIndex }: CustomTableProps) {
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  const {
    sort: { by, ascDesc },
  } = useSelector((state: AppState) => state.country)

  const limitTo2Languages = (arr: string[]) => {
    const some = pickSome(arr, 2)
    return some.map((l) => <li key={l}>{l}</li>)
  }

  const makeTitle = (title: SortBy) => {
    const isSortable = sortLabels.find((elem) => elem === title)
    if (!isSortable) return capitalizeFirstLetter(title)
    let order: SortAscDesc = 'ASC'
    let icon = <FaSort />
    if (by === title) {
      order = ascDesc === 'ASC' ? 'DESC' : 'ASC'
      if (order === 'ASC') icon = <FaArrowUp />
      else icon = <FaArrowDown />
    }
    return (
      <button
        style={{ background: 'none', border: 'none' }}
        onClick={() => {
          dispatch(updateSort({ by: title, ascDesc: order }))
        }}
      >
        {capitalizeFirstLetter(title)}
        {icon}
      </button>
    )
  }

  return (
    <Table striped bordered hover responsive="sm">
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{makeTitle(title as SortBy)}</th>
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
                aria-label="Country details"
                to={`/countries/${country.cca3}`}
              >{`${country.name.common}`}</Link>
            </td>
            <td>
              <ul>
                {country.languages &&
                  limitTo2Languages(Object.values(country.languages))}
              </ul>
            </td>
            <td>{humanFormat(country.population)}</td>
            <td>{`${country.area} `}&#13218;</td>
            <td>{country.region}</td>
            <td>
              <button
                className={`button btn-theme-${theme.name}`}
                aria-label="Add country"
                onClick={() => dispatch(addCountry(country))}
              >
                Add
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CustomTable
