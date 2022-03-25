import {
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import appReducer from 'slices/app.slice'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allRecipeReducer from '../store/nutrition';

const rootReducer = combineReducers({
  app: appReducer,
  allRecipes: allRecipeReducer,
  // add more reducers
})

// const defaultMiddleware = getDefaultMiddleware({
//   serializableCheck: false,
//   immutableCheck: false,
// })


const middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, middleware);
export default store;


// const store = configureStore({
//   reducer: rootReducer,
//   // eslint-disable-next-line no-undef
//   middleware: __DEV__ ? defaultMiddleware.concat(logger) : defaultMiddleware,
// })

// export default store
