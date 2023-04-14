import { configureStore,combineReducers } from '@reduxjs/toolkit'
import listReducer from './listSlice'

const reducer = combineReducers({
   listReducer,
})

export const store = configureStore({
    reducer
})
