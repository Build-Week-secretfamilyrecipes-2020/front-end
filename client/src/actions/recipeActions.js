export const ADD_NEW_RECIPE = "ADD_NEW_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";
export const EDIT_MAT = "EDIT_MAT";
export const addNewRecipe = (recipe) => {
  return {
    type: ADD_NEW_RECIPE,
    payload: recipe
  };
};

export const editRecipe = () => {
  return {
    type: EDIT_RECIPE
  };
};

export const editNewRecipe = (newMat) => {
  return {
    type: EDIT_MAT,
    payload: newMat
  };
};

