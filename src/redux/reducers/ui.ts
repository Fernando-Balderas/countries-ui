import { TOGGLE_DIALOG, UiState, UiActions } from '../../types'

export const defaultUiState: UiState = {
  dialogOpen: {},
}

export default function ui(
  state: UiState = defaultUiState,
  action: UiActions
): UiState {
  switch (action.type) {
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
