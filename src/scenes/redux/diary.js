// import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// import { store } from './store';
// import { auth, db } from '../../firebase/config'
// import firestore from '@react-native-firebase/firestore'

// const userId = auth.currentUser.uid
// const userRef = db.collection('users').doc(userId)

// action constants
const ADD_ENTRY = 'ADD_ENTRY'
const REMOVE_ENTRY = 'REMOVE_ENTRY'

// action creators
const _addEntry = (entry) => ({
  type: ADD_ENTRY,
  entry,
})

export const removeEntry = (date) => ({
  type: REMOVE_ENTRY,
  date,
})

// thunk creators

export const addEntry = (newEntry) => {
  firestore()
    .collection('users')
    .doc(userId)
    .update({ entries: newEntry })
    .then(() => console.log('user updated!'))
}

const merge = (prev, next) => Object.assign({}, prev, next)

const entryReducer = (state = { entries: [] }, action) => {
  switch (action.type) {
    case ADD_ENTRY:
        console.log('ADDING ENTRY ---->');
      return merge(state, {
        entries: state.entries
          .filter((entry) => entry.date !== action.payload.date)
          .concat([action.payload]),
      });
    //   console.log('ADDING ENTRY ---->')
    //   return [...state.entries, action.newEntry]
    case REMOVE_ENTRY:
      return merge(state, {
        entries: state.entries.filter((entry) => entry.date !== action.payload),
      })
    default:
      return state
  }
}

export default entryReducer
