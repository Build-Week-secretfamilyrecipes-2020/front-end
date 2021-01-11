import React, { useState, useReducer } from "react";
import { connect } from "react-redux";

import { toggleEditing, setTitle } from "../actions/titleActions";

// import { initialState, titleReducer } from "../reducers/titleReducer";

const Title = (props) => {
  const [newTitleText, setNewTitleText] = useState();
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  // console.log(state);

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!props.editing ? (
        <h1>
          {props.title2}{" "}
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
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              // setTitle(newTitleText);
              // setEditing(false);
              // dispatch({ type: "UPDATE_TITLE", payload: newTitleText })
              props.setTitle(newTitleText);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = ({ titleState }) => {
  return {
    title2: titleState.title,
    editing: titleState.editing
  };
};

// second param is object that are actioncreators

export default connect(mapStateToProps, { toggleEditing, setTitle })(Title);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
