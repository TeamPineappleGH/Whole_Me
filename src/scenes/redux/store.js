import { createStore, compose  } from "redux";
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import { persistStore, persistReducer } from "redux-persist";
// import localStorage from 'redux-persist/lib/storage' 
// defaults to localStorage for web and AsyncStorage for react-native

import { AsyncStorage } from "@react-native-async-storage/async-storage";
// import firebase from '../../firebase/config';
// import storage from 'redux-persist/lib/storage'

// import entryReducer from "./diary";
import makeRootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

// const persistedReducer = persistReducer(persistConfig, entryReducer);

// export const store = createStore(persistedReducer);
// export const persistor = persistStore(store);

export default (initialState = {}, history) => {
    const persistedReducer = persistReducer(persistConfig, makeRootReducer())
  
    const store = createStore(
      persistedReducer,
      initialState
    )
  
    const persistor = persistStore(store)
  
    return { store, persistor }
  }