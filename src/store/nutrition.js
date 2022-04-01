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
export const fetchRecipes = (ingredient, history) => {
  console.log('hello world')
  return async (dispatch) => {
    try {
      console.log("we are fetching recipes")
      let options = {
        method: 'GET',
        url: 'https://yummly2.p.rapidapi.com/feeds/search',
        params: { 
          q: `${ingredient}`,
          start: '0',
          maxResult: '20' 
        },
        headers: {
          'x-rapidapi-key': '98289f03damsh39a7fa8164574fep1cde95jsn0d3fd6b172f0',
          'x-rapidapi-host': 'yummly2.p.rapidapi.comr',
        },
      };
      const res = await axios.request(options);
      let resultArr = [];
      res.data.feed.forEach((element) => {
        const title = element.content.details.attribution.text;
        resultArr.push({
          label: title.slice(0, title.length - 38),
          imageUrl: element.content.details.images[0].resizableImageUrl,
          website: element.content.details.attribution.url,
        });
      });
      // if (type === 'search') {
        dispatch(getRecipes(resultArr));
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