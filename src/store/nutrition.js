import axios from 'axios'

// ACTION TYPES
const GET_RECIPES = 'GET_RECIPES'

// ACTION CREATORS

const getRecipes = (recipes) => {
  return {
    type: GET_RECIPES,
    recipes,
  }
}

// THUNK CREATORS
export const fetchRecipes = (ingredient) => {
  return async (dispatch) => {
    try {
      console.log('we are fetching recipes');
      let options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/search',
        params: {
          q: `${ingredient}`,
          start: '0',
          maxResult: '10'
        },
        headers: {
          'x-rapidapi-key': 'e76b17f41bmsh48aefae4c3f6274p187698jsn16752868c9a3',
          'x-rapidapi-host': 'yummly2.p.rapidapi.com',
          },
      };
      const res = await axios.request(options);

      // if (type === 'search') {
        dispatch(getRecipes(res));
      // }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = []

// REDUCER
const allRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes;
    default:
      return state;
  }
};

export default allRecipeReducer;