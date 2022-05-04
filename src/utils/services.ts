import { CountryName, Products, Query, SortAscDesc, SortBy } from 'types'

type Value = string | number

function compareFn(a: Value, b: Value, ascDesc: string) {
  let rv = 1
  if (ascDesc === 'DESC') rv = -1
  if (a > b) return rv
  if (b > a) return -rv
  return 0
}

export function sortCountriesByCriteria(
  arr: Products,
  sortBy: SortBy,
  sortAscDesc: SortAscDesc
) {
  if (sortBy === 'name') {
    return [...arr].sort((a, b) =>
      compareFn(
        a[sortBy]['common'] as Value,
        b[sortBy]['common'] as Value,
        sortAscDesc
      )
    )
  }
  return [...arr].sort((a, b) =>
    compareFn(a[sortBy] as Value, b[sortBy] as Value, sortAscDesc)
  )
}

function includesQuery(v: string, query: Query) {
  return v.toLowerCase().includes(query.toLowerCase())
}

export function filterCountriesByQuery(arr: Products, query: Query) {
  return [...arr].filter((el) => {
    const found = Object.entries(el).filter(([k, v]) => {
      if (k === 'name') {
        const { common } = v as CountryName
        return includesQuery(common, query)
      }
      // TODO: Find matches in entries with objects and arrays
      if (typeof v !== 'string') return false
      return includesQuery(v, query)
    })
    return found.length > 0 ? true : false
  })
}
