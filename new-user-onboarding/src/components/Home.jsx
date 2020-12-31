import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    </div>
  );
};

export default Home;
