import { combineReducers } from '@reduxjs/toolkit'
import { reducer as movieLists } from './movieLists.slice'

const rootReducer = combineReducers({
  movieLists
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
