// Action types
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export type Product = {
  cca3: string
  population: number
  name: { common: string; official: string; nativeName: {} }
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

export type ProductState = {
  countries: Products
  inCart: Products
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
