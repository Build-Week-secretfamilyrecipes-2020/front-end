import React from "react";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <div>
      <h1>Home</h1>
      <Link to="/recipes">
        <div className="link">
          <p>Go to your recipes!</p>
        </div>
      </Link>
      <Link to="/newrecipe">
        <div className="link">
          <p>Create a new recipe</p>
        </div>
      </Link>
      <button
        onClick={() => {
          localStorage.clear();
          history.push("/");
        }}
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
