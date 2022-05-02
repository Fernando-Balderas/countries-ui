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
    // Always return new state (e.g, new object) if changed
    return { ...state, inCart: [...state.inCart, product] }
  }

  case REMOVE_PRODUCT: {
    const { product } = action.payload
    const index = state.inCart.findIndex((p) => p.cca3 === product.cca3)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }

  case ADD_PRODUCTS:
    const { products } = action.payload
    return { ...state, countries: products }

  default:
    return state
  }
}
