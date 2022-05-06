import {
  TOGGLE_DIALOG,
  UiState,
  UiActions,
  UPDATE_THEME_KEY,
  ThemeColors,
  UPDATE_CART_OPEN,
} from '../../types'

export const defaultUiState: UiState = {
  themeKey: ThemeColors.Dark,
  cartOpen: false,
  dialogOpen: {},
}

export default function ui(
  state: UiState = defaultUiState,
  action: UiActions
): UiState {
  switch (action.type) {
  case UPDATE_THEME_KEY: {
    const { themeKey } = action.payload
    return { ...state, themeKey }
  }

  case UPDATE_CART_OPEN: {
    const { cartOpen } = action.payload
    return { ...state, cartOpen }
  }

  case TOGGLE_DIALOG: {
    return {
      ...state,
      dialogOpen: {
        ...state.dialogOpen,
        [action.payload.dialog]: !state.dialogOpen[action.payload.dialog],
      },
    }
  }

  default:
    return state
  }
}
