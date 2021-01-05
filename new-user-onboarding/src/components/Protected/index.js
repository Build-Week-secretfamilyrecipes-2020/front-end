import React from "react";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(props) =>
        localStorage.getItem("Token") ? (
          <Component props={props} />
        ) : (
          <Redirect to="/register" />
        )
      }
    />
  );
};

export default Protected;
