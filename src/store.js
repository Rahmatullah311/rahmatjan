import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './auth/authSlice'
import notificationReducer from './notification/notificationSlice'
import solutionReducer from './solution/solutionSlice'
import formatterReducer from './formatter/formatterSlice'


export const store = configureStore({
  reducer: {
    'notification': notificationReducer,
    'authentication': authenticationReducer,
    'solution': solutionReducer,
    'formatter':formatterReducer,
  },
})