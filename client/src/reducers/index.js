import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { recipesReducer } from "./recipesReducer";

export default combineReducers({ titleState: titleReducer, recipesReducer });
