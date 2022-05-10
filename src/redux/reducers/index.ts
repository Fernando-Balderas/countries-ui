import { combineReducers } from 'redux'

import country from './country'
import ui from './ui'

export * from './country'
export * from './ui'

const createRootReducer = () =>
  combineReducers({
    country,
    ui,
  })

export default createRootReducer
