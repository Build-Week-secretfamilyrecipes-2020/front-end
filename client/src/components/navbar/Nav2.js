import React, { useState, useReducer } from "react";
import { connect } from "react-redux";

import { toggleEditing, setTitle } from "../../actions/titleActions";

// import { initialState, titleReducer } from "../reducers/titleReducer";

const Nav = (props) => {
  const [newTitleText, setNewTitleText] = useState();
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  // console.log(state);

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };

  return (

    <nav>

      
      {
      // Get the recipe names
      !props.editing ? (
        <h1>
          {props.recipes}{" "}
          <i
            className="far fa-edit"
            onClick={() => {
              // dispatch({ type: "TOGGLE_EDITING" })
              // debugger;
              props.toggleEditing();
            }}
          />
        </h1>
      ) : (
        <div>
           {props.recipes}{" "}
        </div>
      )}
    </nav>
  );
};
const mapStateToProps = ({ titleState }) => {
  return {
    title2: titleState.title,
    editing: titleState.editing
  };
};

// second param is object that are actioncreators

export default connect(mapStateToProps, { toggleEditing, setTitle })(Nav);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
