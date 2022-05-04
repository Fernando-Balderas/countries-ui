import { createContext } from 'react'
import { Themes } from 'types'

export const themes: Themes = {
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  yellow: {
    foreground: '#000000',
    background: '#FFCC00',
  },
  orange: {
    foreground: '#000000',
    background: '#FF6600',
  },
  red: {
    foreground: '#000000',
    background: '#CC0000',
  },
  blue: {
    foreground: '#000000',
    background: '#006699',
  },
  green: {
    foreground: '#ffffff',
    background: '#003300',
  },
  purple: {
    foreground: '#ffffff',
    background: '#330033',
  },
}

export default createContext(themes.light)
