// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const SORT_PRODUCTS = 'SORT_PRODUCTS'
export const UPDATE_SORT_BY = 'UPDATE_SORT_BY'
export const UPDATE_SORT_ASC_DESC = 'UPDATE_SORT_ASC_DESC'
export const UPDATE_QUERY = 'UPDATE_QUERY'
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type CountryName = { common: string; official: string; nativeName: {} }

export type Product = {
  cca3: string
  population: number
  name: CountryName
  flag: string
  languages: {}
  area: number
  borders: string[]
  capital: string[]
  capitalInfo: { latlng: any[] }
  continents: string[]
  region: string
  currencies: {}
  flags: { png: string; svg: string }
  coatOfArms: { png: string; svg: string }
  latlng: [number, number]
  maps: { googleMaps: string; openStreetMaps: string }
  subregion: string
  postalCode: { format: string; regex: string }
  timezones: string[]
  // altSpellings: string[]
  // car: {}
  // cca2: string
  // ccn3: string
  // cioc: string
  // demonyms: {}
  // fifa: string
  // gini: {}
  // idd: {}
  // independent: boolean
  // landlocked: boolean
  // startOfWeek: string
  // status: string
  // tld: string[]
  // translations: {}
  // unMember: boolean
}

export type Products = Product[]

export type SortBy = keyof Product

export type SortAscDesc = 'ASC' | 'DESC'

export type Query = string

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type AddProductsAction = {
  type: typeof ADD_PRODUCTS
  payload: {
    products: Products
  }
}

export type SortProductsAction = {
  type: typeof SORT_PRODUCTS
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

export type UpdateQuery = {
  type: typeof UPDATE_QUERY
  payload: {
    query: Query
  }
}

export type FilterProducts = {
  type: typeof FILTER_PRODUCTS
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions =
  | AddProductAction
  | RemoveProductAction
  | AddProductsAction
  | SortProductsAction
  | UpdateSortBy
  | UpdateSortAscDesc
  | UpdateQuery
  | FilterProducts

export type ProductState = {
  countries: Products
  inCart: Products
  sortBy: SortBy
  sortAscDesc: SortAscDesc
  query: Query
  filtered: Products
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
}
