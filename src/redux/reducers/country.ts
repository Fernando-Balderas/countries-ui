import {
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  ADD_COUNTRIES,
  SORT_COUNTRIES,
  UPDATE_SORT_BY,
  UPDATE_SORT_ASC_DESC,
  FILTER_COUNTRIES,
  UPDATE_QUERY,
  UPDATE_SORT,
} from '../../types'

import {
  filterCountriesByQuery,
  sortCountriesByCriteria,
} from '../../utils/services'

export const defaultCountryState: CountryState = {
  countries: [],
  inCart: [],
  sortBy: 'name',
  sortAscDesc: 'ASC',
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
      if (state.inCart.find((p) => p.cca3 === country.cca3)) {
        return state
      }
      const index = state.filtered.findIndex((c) => c.cca3 === country.cca3)
      if (index === -1) return state
      const [first] = state.filtered.splice(index, 1)
      // Always return new state (e.g, new object) if changed
      return {
        ...state,
        filtered: [...state.filtered],
        inCart: [...state.inCart, first],
      }
    }

    case REMOVE_COUNTRY: {
      const { country } = action.payload
      const index = state.inCart.findIndex((p) => p.cca3 === country.cca3)
      if (index === -1) return state
      const [first] = state.inCart.splice(index, 1)
      // TODO: Possible improvement using selectors
      const sorted = sortCountriesByCriteria(
        [...state.filtered, first],
        state.sortBy,
        state.sortAscDesc
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

    case UPDATE_SORT: {
      const { by, ascDesc } = action.payload.sort
      return { ...state, sort: { by, ascDesc } }
    }

    case UPDATE_QUERY: {
      const { query } = action.payload
      if (state.query === query) return state
      return { ...state, query }
    }

    case FILTER_COUNTRIES: {
      if (state.query === '')
        return { ...state, filtered: [...state.countries] }
      const filtered = filterCountriesByQuery(state.filtered, state.query)
      return { ...state, filtered }
    }

    default:
      return state
  }
}
