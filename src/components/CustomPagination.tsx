import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

import { FnPaginate } from 'pages/Home'
import { range } from 'utils/services'

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

  return (
    <Pagination
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <Pagination.Prev
        onClick={() => paginate({ pageNumber: currentPage - 1 })}
      />
      {pages.map((p) => (
        <Pagination.Item
          key={p}
          active={p === currentPage}
          onClick={() => paginate({ pageNumber: p })}
        >
          {p}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() => paginate({ pageNumber: currentPage + 1 })}
      />
    </Pagination>
  )
}

export default CustomPagination
