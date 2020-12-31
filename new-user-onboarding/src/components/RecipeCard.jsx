import React from "react";

const RecipeCard = (props) => {
  return (
    <div className="recipe-card-container">
      {props.recipeCardData.length >= 1 ? (
        props.recipeCardData.map((item) => (
          <div className="recipe-card-box">
            <h2 className="recipe-card-title">{item.title}</h2>
            <h4 className="recipe-card-materials">{item.materials}</h4>
            <p className="recipe-card-description">{item.description}</p>
          </div>
        ))
      ) : (
        <div>No recipes!</div>
      )}
    </div>
  );
};

export default RecipeCard;
