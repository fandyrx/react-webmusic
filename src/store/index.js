import {  configureStore } from '@reduxjs/toolkit'
import recommendSlice from "./modules/discover/recommend"


const store = configureStore({
  reducer:{
      recommend: recommendSlice
  }
})


export default store





//原生旧版写法
// import { composeWithDevTools } from '@redux-devtools/extension';
// import thunk from 'redux-thunk'


// const store = createStore(
//   reducer,
//   composeWithDevTools( applyMiddleware(thunk)),
//   )

