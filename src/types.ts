// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const ADD_COUNTRIES = 'ADD_COUNTRIES'
export const SORT_COUNTRIES = 'SORT_COUNTRIES'
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY'
export const UPDATE_SORT_ASC_DESC = 'UPDATE_SORT_ASC_DESC'
export const UPDATE_SORT = 'UPDATE_SORT'
export const UPDATE_QUERY = 'UPDATE_QUERY'
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES'

export const UPDATE_THEME_KEY = 'UPDATE_THEME_KEY'
export const UPDATE_CART_OPEN = 'UPDATE_CART_OPEN'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export type CountryName = { common: string; official: string }

export type Languages = {
  [key: string]: string
}

export type Currency = {
  name: string
  symbol: string
}

export type Currencies = {
  [key: string]: Currency
}

export type Country = {
  cca3: string
  population: number
  name: CountryName
  flag: string
  languages: Languages
  area: number
  borders: string[]
  capital: string[]
  capitalInfo: { latlng: any[] }
  continents: string[]
  region: string
  currencies: Currencies
  flags: { png: string; svg: string }
  coatOfArms: { png: string; svg: string }
  latlng: [number, number]
  maps: { googleMaps: string; openStreetMaps: string }
  subregion: string
  postalCode: { format: string; regex: string }
  timezones: string[]
  independent: boolean
  unMember: boolean
}

export type Countries = Country[]

export type SortBy = keyof Country

export type SortAscDesc = 'ASC' | 'DESC'

export type Sort = {
  by: SortBy
  ascDesc: SortAscDesc
}

export type Query = string

export enum ThemeColors {
  Dark = 'dark',
  Light = 'light',
  Yellow = 'yellow',
  Orange = 'orange',
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
  Purple = 'purple',
}

export type Theme = {
  name: string
  foreground: string
  background: string
}

export type Themes = {
  [key in ThemeColors]: Theme
}

export type ThemeKey = keyof Themes

export type CartOpen = boolean

export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type CountryState = {
  countries: Countries
  inCart: Countries
  sortBy: SortBy
  sortAscDesc: SortAscDesc
  sort: Sort
  query: Query
  filtered: Countries
}

// Using dynamic keys from an enum
export type UiState = {
  themeKey: ThemeKey
  cartOpen: CartOpen
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  country: CountryState
  ui: UiState
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type AddCountriesAction = {
  type: typeof ADD_COUNTRIES
  payload: {
    countries: Countries
  }
}

export type SortCountriessAction = {
  type: typeof SORT_COUNTRIES
}

export type UpdateSortBy = {
  type: typeof UPDATE_SORT_BY
  payload: {
    sortBy: SortBy
  }
}

export type UpdateSortAscDesc = {
  type: typeof UPDATE_SORT_ASC_DESC
  payload: {
    sortAscDesc: SortAscDesc
  }
}

export type UpdateSort = {
  type: typeof UPDATE_SORT
  payload: {
    sort: Sort
  }
}

export type UpdateQuery = {
  type: typeof UPDATE_QUERY
  payload: {
    query: Query
  }
}

export type FilterCountries = {
  type: typeof FILTER_COUNTRIES
}

// Use this union in reducer
export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | AddCountriesAction
  | SortCountriessAction
  | UpdateSortBy
  | UpdateSortAscDesc
  | UpdateSort
  | UpdateQuery
  | FilterCountries

export type UpdateThemeKeyAction = {
  type: typeof UPDATE_THEME_KEY
  payload: {
    themeKey: ThemeKey
  }
}

export type UpdateCartOpen = {
  type: typeof UPDATE_CART_OPEN
  payload: {
    cartOpen: CartOpen
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions =
  | ToggleDialogAction
  | UpdateThemeKeyAction
  | UpdateCartOpen

type PaginateArgs = {
  pageNumber: number
}

export type FnPaginate = ({ pageNumber }: PaginateArgs) => void
