import axios from "axios"

//action creator
const GET_RECIPES = 'GET_RECIPES'

//action item

const getRecipes = (recipes) => {
  return {
    type: GET_RECIPES,
    recipes,
  };
};

export const fetchRecipes = (ingredient, type) => {
  return async (dispatch) => {
    try {
      let options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/search',
        params: { 
          q: `${ingredient}`,
          start: '0',
          maxResult: '10' 
        },
        headers: {
          'x-rapidapi-key': `98289f03damsh39a7fa8164574fep1cde95jsn0d3fd6b172f0`,
          'x-rapidapi-host': 'yummly2.p.rapidapi.com',
        },
      };
      const res = await axios.request(options);
      let resultArr = [];
      res.data.hits.forEach((element) => {
        resultArr.push({
          label: element.recipe.label,
          imageUrl: element.recipe.image,
          website: element.recipe.url,
        });
      });
        dispatch(getRecipes(resultArr));
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

const allRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return [...state, action.recipes];
    default:
      return state;
  }
};

export default allRecipeReducer;