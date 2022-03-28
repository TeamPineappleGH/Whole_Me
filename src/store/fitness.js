import axios from 'axios'

// ACTION TYPES
const GET_EXERCISES = 'GET_EXERCISES'

// ACTION CREATORS

const getExercises = (exercise) => {
  return {
    type: GET_EXERCISES,
    exercise,
  }
}

// THUNK CREATORS
export const fetchExercises = (target) => {
  return async (dispatch) => {
    try {
      console.log('we are fetching exercises')
      let options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
        params: {
          start: '0',
          maxResult: '20'
        },
        headers: {
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key':
            '98289f03damsh39a7fa8164574fep1cde95jsn0d3fd6b172f0',
        },
      }
      const res = await axios.request(options)
      // console.log('res-->', res.data)

      let resultArr = []
      res.data.map((exercise) => {
        const id = exercise.id
        const name = exercise.name
        const gif = exercise.gifUrl
        const target = exercise.target

        resultArr.push({
          id: id,
          name: name,
          gif: gif,
          target: target,
        })
      })
      console.log('resultArr-->', resultArr)
      dispatch(getExercises(resultArr))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = []

// REDUCER
const allExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return action.exercise
    default:
      return state
  }
}

export default allExerciseReducer
