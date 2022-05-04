import { Dispatch } from 'redux'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Product,
  Products,
  ADD_PRODUCTS,
  SORT_PRODUCTS,
  SortBy,
  UPDATE_SORT_BY,
  SortAscDesc,
  UPDATE_SORT_ASC_DESC,
  Query,
  FILTER_PRODUCTS,
  UPDATE_QUERY,
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

export function sortProducts(): ProductActions {
  return {
    type: SORT_PRODUCTS,
  }
}

export function updateSortBy(sortBy: SortBy): ProductActions {
  return {
    type: UPDATE_SORT_BY,
    payload: {
      sortBy,
    },
  }
}

export function updateSortAscDesc(sortAscDesc: SortAscDesc): ProductActions {
  return {
    type: UPDATE_SORT_ASC_DESC,
    payload: {
      sortAscDesc,
    },
  }
}

export function updateQuery(query: Query): ProductActions {
  return {
    type: UPDATE_QUERY,
    payload: {
      query,
    },
  }
}

export function filterProducts(): ProductActions {
  return {
    type: FILTER_PRODUCTS,
  }
}

// Async action processed by redux-thunk middleware
export function fetchProducts() {
  // TODO: improve
  return function (dispatch: Dispatch) {
    return fetch(`${API_URL}/v3.1/all`)
      .then((resp) => resp.json())
      .then((products) => {
        dispatch(addProducts(products))
      })
      .then(() => dispatch(filterProducts()))
      .then(() => dispatch(sortProducts()))
  }
}
