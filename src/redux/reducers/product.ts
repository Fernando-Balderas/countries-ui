import {
  ProductState,
  ProductActions,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT_BY,
  UPDATE_SORT_ASC_DESC,
} from '../../types'

import { sortCountriesByCriteria } from '../../utils/services'

export const defaultProductState: ProductState = {
  countries: [],
  inCart: [],
  sortBy: 'name',
  sortAscDesc: 'ASC',
}

export default function product(
  state: ProductState = defaultProductState,
  action: ProductActions
): ProductState {
  switch (action.type) {
  case ADD_PRODUCT: {
    const { product } = action.payload
    if (state.inCart.find((p) => p.cca3 === product.cca3)) {
      return state
    }
    const index = state.countries.findIndex((c) => c.cca3 === product.cca3)
    if (index === -1) return state
    const [first] = state.countries.splice(index, 1)
    // Always return new state (e.g, new object) if changed
    return {
      ...state,
      countries: [...state.countries],
      inCart: [...state.inCart, first],
    }
  }

  case REMOVE_PRODUCT: {
    const { product } = action.payload
    const index = state.inCart.findIndex((p) => p.cca3 === product.cca3)
    if (index === -1) return state
    const [first] = state.inCart.splice(index, 1)
    // TODO: Possible improvement using selectors
    const sorted = sortCountriesByCriteria(
      [...state.countries, first],
      state.sortBy,
      state.sortAscDesc
    )
    return {
      ...state,
      countries: sorted,
      inCart: [...state.inCart],
    }
  }

  case ADD_PRODUCTS: {
    const { products } = action.payload
    return { ...state, countries: products }
  }

  case SORT_PRODUCTS: {
    const sorted = sortCountriesByCriteria(
      state.countries,
      state.sortBy,
      state.sortAscDesc
    )
    return { ...state, countries: sorted }
  }

  case UPDATE_SORT_BY: {
    const { sortBy } = action.payload
    if (state.sortBy === sortBy) return state
    return { ...state, sortBy: sortBy }
  }

  case UPDATE_SORT_ASC_DESC: {
    const { sortAscDesc } = action.payload
    if (state.sortAscDesc === sortAscDesc) return state
    return { ...state, sortAscDesc: sortAscDesc }
  }

  default:
    return state
  }
}
