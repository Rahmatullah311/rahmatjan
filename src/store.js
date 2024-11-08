import { configureStore } from '@reduxjs/toolkit'
import solutionReducer from './solution/solutionSlice'
import formatterReducer from './formatter/formatterSlice'


export const store = configureStore({
  reducer: {
    'solution': solutionReducer,
    'formatter':formatterReducer,
  },
})