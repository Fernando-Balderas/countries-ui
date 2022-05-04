import {
  TOGGLE_DIALOG,
  UiState,
  UiActions,
  UPDATE_THEME_KEY,
  ThemeColors,
} from '../../types'

export const defaultUiState: UiState = {
  themeKey: ThemeColors.Dark,
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
