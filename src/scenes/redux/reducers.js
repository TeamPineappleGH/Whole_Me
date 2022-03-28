import { combineReducers } from 'redux'
import { firebaseReducer as firebase } from 'react-redux-firebase'
import { persistReducer } from 'redux-persist'
// import localStorage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import entryReducer from './diary';

export default function makeRootReducer() {
  return combineReducers({
    // Add sync reducers here
    firebase: persistReducer(
      { key: 'firebaseState', storage: AsyncStorage, stateReconciler: hardSet },
      firebase
    ),
    location: entryReducer
  })
}