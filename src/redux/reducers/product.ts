import {
  ProductState,
  ProductActions,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT_BY,
} from '../../types'

import { sortCountriesByCriteria } from '../../utils/services'

export const defaultProductState: ProductState = {
  countries: [],
  inCart: [],
  sortBy: 'name',
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
    // TODO: sort array of countries again
    const sorted = sortCountriesByCriteria(
      [...state.countries, first],
      state.sortBy
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
    const sorted = sortCountriesByCriteria(state.countries, state.sortBy)
    return { ...state, countries: sorted }
  }

  case UPDATE_SORT_BY: {
    const { sortBy } = action.payload
    return { ...state, sortBy: sortBy }
  }

  default:
    return state
  }
}
