import { createContext } from 'react'
import { Themes } from 'types'

export const themes: Themes = {
  dark: {
    name: 'dark',
    foreground: '#ffffff',
    background: '#222222',
  },
  light: {
    name: 'light',
    foreground: '#000000',
    background: '#c2c2c2',
  },
  yellow: {
    name: 'yellow',
    foreground: '#000000',
    background: '#FFCC00',
  },
  orange: {
    name: 'orange',
    foreground: '#000000',
    background: '#FF6600',
  },
  red: {
    name: 'red',
    foreground: '#000000',
    background: '#CC0000',
  },
  blue: {
    name: 'blue',
    foreground: '#000000',
    background: '#006699',
  },
  green: {
    name: 'green',
    foreground: '#ffffff',
    background: '#003300',
  },
  purple: {
    name: 'purple',
    foreground: '#ffffff',
    background: '#330033',
  },
}

export default createContext(themes.light)
