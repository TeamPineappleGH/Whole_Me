import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
// import firebase from '../../firebase/config';
// import storage from 'redux-persist/lib/storage'

import entryReducer from "./reducer";

const persistConfig = {
  key: "base",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, entryReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
