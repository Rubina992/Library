import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice.js'
import userReducer from './UserSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})