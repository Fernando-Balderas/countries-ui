import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  CountryActions,
  Country,
  Countries,
  ADD_COUNTRIES,
  SORT_COUNTRIES,
  Query,
  FILTER_COUNTRIES,
  Sort,
  UPDATE_SORT,
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

export function updateSort(sort: Sort): CountryActions {
  return {
    type: UPDATE_SORT,
    payload: {
      sort,
    },
  }
}

export function filterCountries(query: Query): CountryActions {
  return {
    type: FILTER_COUNTRIES,
    payload: {
      query,
    },
  }
}

// Async action processed by redux-thunk middleware
export function fetchCountries() {
  // TODO: improve
  return function (dispatch: Dispatch) {
    return fetch(`${API_URL}/v3.1/all`)
      .then((resp) => resp.json())
      .then((countries) => {
        dispatch(addCountries(countries))
      })
      .then(() => dispatch(filterCountries('')))
  }
}
