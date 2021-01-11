/*
  1. action - object that has a type: key and optional payload: key
  2. action creator - function that creates and returns an action
  3. action names - const variables that we use for naming our actions
*/

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const SET_TITLE = "SET_TITLE";

export const toggleEditing = () => {
  return {
    type: TOGGLE_EDITING
  };
};

export const setTitle = (newTitle) => {
  return {
    type: SET_TITLE,
    payload: newTitle
  };
};
