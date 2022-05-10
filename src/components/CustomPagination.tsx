import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { range } from 'utils/services'

import { FnPaginate } from '../types'

type CustomPaginationProps = {
  totalProducts: number
  currentPage: number
  productsPerPage: number
  paginate: FnPaginate
}

function CustomPagination({
  totalProducts,
  currentPage,
  productsPerPage,
  paginate,
}: CustomPaginationProps) {
  const P = Math.ceil(totalProducts / productsPerPage)
  let pages = range(P, 1)

  const handlePrev = () => paginate({ pageNumber: currentPage - 1 })
  const handleNext = () => paginate({ pageNumber: currentPage + 1 })

  return (
    <Pagination
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <Pagination.Prev onClick={handlePrev} />
      {pages.map((p) => (
        <Pagination.Item
          key={p}
          active={p === currentPage}
          onClick={() => paginate({ pageNumber: p })}
        >
          {p}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={handleNext} />
    </Pagination>
  )
}

export default CustomPagination
