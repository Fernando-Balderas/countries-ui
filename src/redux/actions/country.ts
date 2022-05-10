import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CountryActions,
  Country,
  Countries,
  ADD_COUNTRIES,
  SORT_COUNTRIES,
  SortBy,
  UPDATE_SORT_BY,
  SortAscDesc,
  UPDATE_SORT_ASC_DESC,
  Query,
  FILTER_COUNTRIES,
  UPDATE_QUERY,
} from '../../types'
import { API_URL } from 'utils/constants'

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}

export function addCountries(countries: Countries): CountryActions {
  return {
    type: ADD_COUNTRIES,
    payload: {
      countries,
    },
  }
}

export function sortCountries(): CountryActions {
  return {
    type: SORT_COUNTRIES,
  }
}

export function updateSortBy(sortBy: SortBy): CountryActions {
  return {
    type: UPDATE_SORT_BY,
    payload: {
      sortBy,
    },
  }
}

export function updateSortAscDesc(sortAscDesc: SortAscDesc): CountryActions {
  return {
    type: UPDATE_SORT_ASC_DESC,
    payload: {
      sortAscDesc,
    },
  }
}

export function updateQuery(query: Query): CountryActions {
  return {
    type: UPDATE_QUERY,
    payload: {
      query,
    },
  }
}

export function filterCountries(): CountryActions {
  return {
    type: FILTER_COUNTRIES,
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountries() {
  // TODO: improve
  return function (dispatch: Dispatch) {
    return fetch(`${API_URL}/v3.1/all`)
      .then((resp) => resp.json())
      .then((countries) => {
        console.log(countries)
        dispatch(addCountries(countries))
      })
      .then(() => dispatch(filterCountries()))
      .then(() => dispatch(sortCountries()))
  }
}
