import React, { useState } from "react";
import * as Yup from "yup";
import { useHistory, Link } from "react-router-dom";
import { recipeSchema } from "../validations/UserValidations";
import axios from "axios";

import "./NewRecipe.css";

const NewRecipe = () => {
  const history = useHistory();

  const [recipeCard, setRecipeCard] = useState({
    title: "",

    materials: "",
    instructions: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    materials: "",
    description: "",
    message: "",
  });

  const validateChange = (event) => {
    Yup.reach(recipeSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrors({ ...errors });
      })
      .catch((err) =>
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        })
      );
  };

  const changeHandler = (e) => {
    e.persist();
    const newRecipe = { ...recipeCard, [e.target.name]: e.target.value };
    validateChange(e);
    setRecipeCard(newRecipe);
    clearErrors();
  };

  const clearErrors = () => {
    setTimeout(() => {
      console.log("trying to clear");
      setErrors({
        title: "",
        materials: "",
        message: "",
      });
    }, 5000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const isValid = await recipeSchema.isValid(recipeCard);
      if (!isValid) {
        setErrors({ ...errors, message: "Please fill out required fields" });
        return clearErrors();
      }
      const resp = await axios.post(
        "http://localhost:4200/api/posts",
        recipeCard,
        {
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        }
      );
      console.log(resp.data);
      history.push("/recipes");
    } catch (err) {
      console.log(err);
      setErrors({ ...errors, message: "Account information not valid" });
      clearErrors();
    }
  };

  return (
    <div>
      <h1>Add a new recipe!</h1>
      <div className="main-container">
        <form className="add-recipe-container" onSubmit={onSubmit}>
          <h2>Add a Recipe</h2>
          <div className="input-box">
            <label>Recipe Title </label>
            <input
              type="text"
              id="title"
              name="title"
              value={recipeCard.title}
              onChange={changeHandler}
              className="input-field"
            />
            {errors.title.length > 0 ? (
              <p className="error">{errors.title}</p>
            ) : null}
          </div>
          <div className="input-box">
            <label>Recipe Ingredients </label>
            <textarea
              type="text"
              id="materials"
              name="materials"
              value={recipeCard.materials}
              onChange={changeHandler}
              className="input-field"
            />
            {errors.materials.length > 0 ? (
              <p className="error">{errors.ingredients}</p>
            ) : null}
          </div>
          <div className="input-box">
            <label>Recipe Instructions </label>
            <textarea
              type="text"
              id="instructions"
              name="instructions"
              value={recipeCard.instructions}
              onChange={changeHandler}
              className="input-field"
            />
          </div>
          <div className="input-box">
            <label>Recipe Description </label>
            <input
              type="text"
              id="description"
              name="description"
              value={recipeCard.description}
              onChange={changeHandler}
              className="input-field"
            />
          </div>
          <button type="submit">Add</button>
          {errors.message.length > 0 ? (
            <p className="error">{errors.message}</p>
          ) : null}
        </form>
      </div>
      <div>
        <Link to="/recipes">
          <div className="link">
            <p>View your recipes</p>
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
    </div>
  );
};

export default NewRecipe;
