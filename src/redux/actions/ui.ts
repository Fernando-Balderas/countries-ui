import {
  TOGGLE_DIALOG,
  UiActions,
  DialogType,
  UPDATE_THEME_KEY,
  ThemeKey,
} from '../../types'

export function updateThemeKey(themeKey: ThemeKey): UiActions {
  return {
    type: UPDATE_THEME_KEY,
    payload: {
      themeKey,
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
