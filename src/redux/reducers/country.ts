import {
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  ADD_COUNTRIES,
  SORT_COUNTRIES,
  FILTER_COUNTRIES,
  UPDATE_SORT,
  Countries,
} from '../../types'

import {
  filterCountriesByQuery,
  removeCountriesInCart,
  sortCountriesByCriteria,
} from '../../utils/services'

export const defaultCountryState: CountryState = {
  countries: [],
  inCart: [],
  sort: {
    by: 'name',
    ascDesc: 'ASC',
  },
  query: '',
  filtered: [],
}

export default function country(
  state: CountryState = defaultCountryState,
  action: CountryActions
): CountryState {
  switch (action.type) {
    case ADD_COUNTRY: {
      const { country } = action.payload
      if (state.inCart.find((c) => c.cca3 === country.cca3)) {
        return state
      }
      const index = state.filtered.findIndex((c) => c.cca3 === country.cca3)
      if (index > -1) state.filtered.splice(index, 1)
      return {
        ...state,
        filtered: [...state.filtered],
        inCart: [...state.inCart, country],
      }
    }

    case REMOVE_COUNTRY: {
      const { country } = action.payload
      const index = state.inCart.findIndex((p) => p.cca3 === country.cca3)
      if (index === -1) return state
      const [first] = state.inCart.splice(index, 1)
      const sorted = sortCountriesByCriteria(
        [...state.filtered, first],
        state.sort.by,
        state.sort.ascDesc
      )
      return {
        ...state,
        filtered: sorted,
        inCart: [...state.inCart],
      }
    }

    case ADD_COUNTRIES: {
      const { countries } = action.payload
      return { ...state, countries: countries }
    }

    case SORT_COUNTRIES: {
      const sorted = sortCountriesByCriteria(
        state.filtered,
        state.sort.by,
        state.sort.ascDesc
      )
      return { ...state, filtered: sorted }
    }

    case UPDATE_SORT: {
      const { by, ascDesc } = action.payload.sort
      return { ...state, sort: { by, ascDesc } }
    }

    case FILTER_COUNTRIES: {
      const { query } = action.payload
      if (query === state.query && state.query !== '') return state
      let filtered: Countries
      if (query === '') filtered = [...state.countries]
      else filtered = filterCountriesByQuery(state.filtered, state.query)
      filtered = removeCountriesInCart(filtered, state.inCart)
      return { ...state, query, filtered }
    }

    default:
      return state
  }
}
