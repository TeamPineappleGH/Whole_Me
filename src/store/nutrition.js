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
  console.log('hello world')
  return async (dispatch) => {
    try {
      console.log("we are fetching recipes")
      let options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/search',
        params: { 
          q: `${ingredient}`,
          // start: '0',
          // maxResult: '10' 
        },
        headers: {
          'x-rapidapi-key': 'e76b17f41bmsh48aefae4c3f6274p187698jsn16752868c9a3',
          'x-rapidapi-host': 'yummly2.p.rapidapi.com',
        },
      };
      const res = await axios.request(options);
      console.log("what is my api data", res)
      // let resultArr = [];
      // res.data.hits.forEach((element) => {
      //   resultArr.push({
      //     label: element.recipe.label,
      //     imageUrl: element.recipe.image,
      //     website: element.recipe.url,
      //   });
      // });
      // if (type === 'search') {
        dispatch(getRecipes(res));
      // }
    } catch (error) {
      console.log(error);
    }
  };
};

const initialState = [];

const allRecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.recipes;
    default:
      return state;
  }
};

export default allRecipeReducer;