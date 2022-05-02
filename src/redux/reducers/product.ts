import {
  ProductState,
  ProductActions,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADD_PRODUCTS,
} from '../../types'

export default function product(
  state: ProductState = {
    countries: [],
    inCart: [],
  },
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
    return {
      countries: [...state.countries, first],
      inCart: [...state.inCart],
    }
  }

  case ADD_PRODUCTS: {
    const { products } = action.payload
    return { ...state, countries: products }
  }

  default:
    return state
  }
}
