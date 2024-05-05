import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './reducers/filterReducer'

export default configureStore({
  reducer: {
    filters:filterReducer
    }
})