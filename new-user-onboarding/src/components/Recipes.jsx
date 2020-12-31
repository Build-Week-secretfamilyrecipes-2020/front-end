import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import RecipeCard from "./RecipeCard";

import "./Recipes.css";

const Recipes = (props) => {
  const [recipeCardData, setRecipeCardData] = useState({});
  const [filteredRecipes, setFilteredRecipes] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const grabData = await axios.get("http://localhost:4200/api/posts", {
        headers: {
          Authorization: localStorage.getItem("Token"),
        },
      });
      console.log(grabData);
      setRecipeCardData(grabData.data.data);
    };
    fetchData();
    // localStorage.setItem("Token", resp.data.token);
  }, []);

  console.log(recipeCardData);

  const filteredRecipeList = (e) => {
    console.log(e.target.value);

    if (e.target.value.length === 1 && e.key === "Backspace") {
      return setFilteredRecipes([]);
    }
    let filteredTitle = "";
    if (e.target.value === "") {
      filteredTitle = e.key;
    } else {
      filteredTitle = e.target.value;
    }
    console.log(filteredTitle);
    const filteredData = recipeCardData.filter((item) => {
      if (item.title.toLowerCase().includes(filteredTitle)) {
        return item;
      }
      return null;
    });
    setFilteredRecipes(filteredData);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <form>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          onKeyDown={filteredRecipeList}
          tabIndex="0"
        />
      </form>
      <RecipeCard
        recipeCardData={
          filteredRecipes.length > 0 ? filteredRecipes : recipeCardData
        }
      />
      <div>
        <Link to="/newrecipe">
          <div className="link">
            <p>Create a new recipe</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/">
          <div className="link">
            <p>Go Home</p>
          </div>
        </Link>
      </div>
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

export default Recipes;
