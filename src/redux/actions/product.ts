import { Dispatch } from 'redux'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Product,
  Products,
  ADD_PRODUCTS,
} from '../../types'
import { API_URL } from 'utils/constants'

export function addProduct(product: Product): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: Product): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

export function addProducts(products: Products): ProductActions {
  return {
    type: ADD_PRODUCTS,
    payload: {
      products,
    },
  }
}

// An Example of Async action processed by redux-thunk middleware
export function fetchProducts() {
  // TODO: improve
  return function (dispatch: Dispatch) {
    return fetch(`${API_URL}/v3.1/all`)
      .then((resp) => resp.json())
      .then((products) => {
        dispatch(addProducts(products))
      })
  }
}
