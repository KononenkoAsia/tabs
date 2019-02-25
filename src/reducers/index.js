import { combineReducers } from 'redux'
import content from './contentReducer'
import tabs from './tabsReducer'
import active from './activeTab'

const reduser = combineReducers({
  tabs,
  content,
  active
})

export default reduser
