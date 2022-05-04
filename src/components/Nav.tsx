import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateThemeKey } from 'redux/actions'
import ThemeContext from 'contexts/Theme'

import { ThemeKey, ThemeColors, AppState } from 'types'

function Nav() {
  const theme = useContext(ThemeContext)
  const dispatch = useDispatch()
  const { themeKey } = useSelector((state: AppState) => state.ui)
  return (
    <nav style={{ background: theme.background, color: theme.foreground }}>
      Nav
      <ul>
        <li>
          <select
            id="themes"
            defaultValue={themeKey}
            onBlur={(e) => dispatch(updateThemeKey(e.target.value as ThemeKey))}
          >
            {Object.entries(ThemeColors).map(([k, v], i) => (
              <option key={i} value={v}>
                {k}
              </option>
            ))}
          </select>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
