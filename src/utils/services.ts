import { Products, SortBy } from 'types'

export function sortCountriesByCriteria(arr: Products, sortBy: SortBy) {
  if (sortBy === 'name') {
    return [...arr].sort((a, b) =>
      a[sortBy]['common'] > b[sortBy]['common'] ? 1 : -1
    )
  }
  return [...arr].sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1))
}
