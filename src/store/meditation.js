import axios from 'axios'

// ACTION TYPES
const GET_MEDITATIONS = 'GET_MEDITATIONS'

// ACTION CREATORS

const getMeditation = (meditation) => {
  return {
    type: GET_MEDITATIONS,
    meditation,
  }
}

// THUNK CREATORS
export const fetchMeditations = (meditation) => {
  return async (dispatch) => {
    try {
      console.log('we are fetching meditations')
      let options = {
        method: 'GET',
        url: `https://meditationdb.p.rapidapi.com/meditations/target/${target}`,
        params: {
          start: '0',
          maxResult: '20'
        },
        headers: {
          'X-RapidAPI-Host': 'meditationdb.p.rapidapi.com',
          'X-RapidAPI-Key':
            '98289f03damsh39a7fa8164574fep1cde95jsn0d3fd6b172f0',
        },
      }
      const res = await axios.request(options)
      // console.log('res-->', res.data)

      // let resultArr = []
      // res.data.map((meditation) => {
      //   const id = meditation.id
      //   const name = meditation.name
      //   const gif = meditation.gifUrl
      //   const target = meditation.target

      //   resultArr.push({
      //     id: id,
      //     name: name,
      //     gif: gif,
      //     target: target,
      //   })
      // })
      console.log('resultArr-->', resultArr)
      // dispatch(getMeditation(resultArr))
    } catch (error) {
      console.log(error)
    }
  }
}

const initialState = []

// REDUCER
const allMeditationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEDITATIONS:
      return action.meditation
    default:
      return state
  }
}

export default allMeditationReducer
