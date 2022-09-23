import { createSlice, configureStore,createStore,applyMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer'

import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from 'redux-thunk'


const store = createStore(
  reducer,
  composeWithDevTools( applyMiddleware(thunk)),
  )




// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
    
//   },
//   reducers: {
   
//   }
// })



// const store = configureStore({
//   reducer: counterSlice.reducer
// })

   

export default store