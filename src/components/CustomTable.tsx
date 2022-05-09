import React from 'react'
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Products } from 'types'
import { addProduct } from 'redux/actions'

import Button from 'react-bootstrap/Button'
import { pickSome } from 'utils/services'
var humanFormat = require('human-format')

type CustomTableProps = {
  products: Products
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

function CustomTable({ products }: CustomTableProps) {
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
        {products.map((c, i) => (
          <tr key={c.cca3}>
            <td>{i + 1}</td>
            <td>{c.flag}</td>
            <td>
              <Link to={`/products/${c.cca3}`}>{`${c.name.common}`}</Link>
            </td>
            <td>
              <ul>
                {c.languages && makeSomeComponents(Object.values(c.languages))}
              </ul>
            </td>
            <td>{humanFormat(c.population)}</td>
            <td>{`${c.area} `}&#13218;</td>
            <td>{c.region}</td>
            <td>
              <Button onClick={() => dispatch(addProduct(c))}>Add</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default CustomTable
