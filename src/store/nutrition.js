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
          start: '0',
          maxResult: '10' 
        },
        headers: {
          'x-rapidapi-key': '98289f03damsh39a7fa8164574fep1cde95jsn0d3fd6b172f0',
          'x-rapidapi-host': 'yummly2.p.rapidapi.comr',
        },
      };
      const res = await axios.request(options);
      console.log("what is my api data", res.data.feed)
      console.log("result array", resultArr)
      let resultArr = [];
      res.data.feed.forEach((element) => {
        const title = element.content.details.attribution.text;
        resultArr.push({
          label: title.slice(0, title.length - 31),
          // imageUrl: element.images[0].resizableImageUrl,
          // website: element.details.url,
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