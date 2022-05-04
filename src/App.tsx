import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'types'
import ThemeContext, { themes } from 'contexts/Theme'

import Routes from './Routes'

export default function App() {
  const { themeKey } = useSelector((state: AppState) => state.ui)

  return (
    <ThemeContext.Provider value={themes[themeKey]}>
      <Routes />
    </ThemeContext.Provider>
  )
}
