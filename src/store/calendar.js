
// ACTION TYPES
const SET_PHASECOLOR = 'SET_PHASECOLOR'

// ACTION CREATORS
export const setPhase = (phaseColor) => {
    return {
      type: SET_PHASECOLOR,
      phaseColor
    }
  }

// INITIAL STATE
const initialState = {}

//REDUCER 

const phase = (state = initialState, action) => {
    switch (action.type) {
      case SET_PHASECOLOR:
        return {...state, color: action.phaseColor};
      default:
        return state;
    }
  };
  
  export default phase;
