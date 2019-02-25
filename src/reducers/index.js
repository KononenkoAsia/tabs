import { combineReducers } from 'redux'
import content from './contentReducer'
import tabs from './tabsReducer'

const reduser = combineReducers({
  tabs,
  content
})

export default reduser
