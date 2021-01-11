import { ADD_NEW_RECIPE, EDIT_RECIPE, EDIT_MAT } from "../actions/recipeActions";

const initialState = {
  recipes: [
    { name: "Shrimp Bobtail", recStatus: false, 
    recipeMat:"Shrimp, Sardines, Crab, Oyster, Clam, Lettus, Pineapple, Cabbage, Cranberrie, Strawberry, Optional To Addin: Tommato, fishkilts and stomach broth", 
    recipeDir: ['20 OZ Shrimp + Sardines ',
    '2LBs Crab with 9OZ oyster and clam chowder sauce mixed ',
    '1 LB each of Lettus, pineapple & cabbage mixed with 6 OZ Fresh Cranberries or Strawberries ', 
    'Combine All 3 Mixes together to Make the Shrimp Bobtail '] },
    { name: "Gumbo Soup", recStatus: false,  
    recipeMat:"Sardines, Yellow Mustard, Carrots, Cabbage, Lettus", 
    recipeDir: ['2 LBs spoons Sardines',' 8 OZ Yellow Mustard',
    '3 LBs spoons Lettus, Carrots, and Cabbage'] }
  ],
  recStatus: true
};

export const recipesReducer = (state = initialState, action) => {
  
  console.log(`NAL: recipesReducer: action: `, action);
  switch (action.type) {
    case ADD_NEW_RECIPE:
      return {
        
          ...state,
        recipes: [
          ...state.recipes,
          
          {
            id: action.payload.recId,
             name: action.payload.newRecipe, 
            recStatus: action.payload.recStatus,
            recipeMat: action.payload.newRecipeMat,
            recipeDir: action.payload.newRecipeDir 
          }
        ]
      };
      case EDIT_RECIPE:
        return {
          ...state,
          recStatus: !state.recStatus
        };
      case EDIT_MAT:
          return{
            ...state.recipes,
            recipes: [
              ...state,
              
              { 
                name: action.payload.newRecipe, 
                recStatus: action.payload.recStatus,
                recipeMat: action.payload.newRecipeMat,
                recipeDir: action.payload.newRecipeDir 
              }
            ]
          };
    default:
      return state;
  }
};
