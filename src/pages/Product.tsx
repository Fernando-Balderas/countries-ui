import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function Product() {
  const { id } = useParams<{ id: string }>()

  const product = useSelector((state: AppState) =>
    state.product.countries.find((p) => p.cca3 === id)
  )

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      <h1>Product page</h1>
      <h2>{`${product.name} - ${product.population}`}</h2>
    </>
  )
}
