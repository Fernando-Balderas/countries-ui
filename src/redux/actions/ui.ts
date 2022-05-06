import {
  TOGGLE_DIALOG,
  UiActions,
  DialogType,
  UPDATE_THEME_KEY,
  ThemeKey,
  UPDATE_CART_OPEN,
  CartOpen,
} from '../../types'

export function updateThemeKey(themeKey: ThemeKey): UiActions {
  return {
    type: UPDATE_THEME_KEY,
    payload: {
      themeKey,
    },
  }
}

export function updateCartOpen(cartOpen: CartOpen): UiActions {
  return {
    type: UPDATE_CART_OPEN,
    payload: {
      cartOpen,
    },
  }
}

export function toggleDialog(dialog: DialogType): UiActions {
  return {
    type: TOGGLE_DIALOG,
    payload: {
      dialog,
    },
  }
}
