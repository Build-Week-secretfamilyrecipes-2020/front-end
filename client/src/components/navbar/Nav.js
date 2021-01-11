import React from "react";
import { connect } from "react-redux";

import { addNewRecipe, editRecipe } from "../../actions/recipeActions";

class Nav extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          catLink: ['Fish',{FishCat1:'Shrimp Bobtail',FishCat2:'Gumbo Soup'}
                  ,'Salad',{SaladCat1:'Qual Salad'}
        ],
          newRecipe: "", recStatus: false, theCategory: "", 
          editStatus: false, newRecipeDir:""
        };
  }
        handleChanges = (e) => {
          this.setState({ newRecipe: e.target.value});
        };
        handleMatChanges = (e) => {
          this.setState({ theCategory: e.target.value });
        };
        handleDirChanges = (e) =>{
          this.setState({newRecipeDir: e.target.value})
        };
        handleRecStatus = (e) =>{
          this.props.editRecipe();
          this.setState({recStatus: !this.state.recStatus})
          this.setState({editStatus: !this.state.editStatus})
          console.log('status '+this.state.recStatus)
      
      
        };
  
  
  render() {
    return (
      <React.Fragment>

<div className="friends-list">
        <nav key={0}> 
          {
                  
        // Get the recipe names
          this.props.recipes.map((recipe, index) => (
            <>
                <div key={index.id} className="recipeCard">
                    <h2 key={index}>
                    {recipe.name}
                    
                    </h2>

                </div>
            </>
        ))}
        </nav>
        </div>

        
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    recipes: state.recipesReducer.recipes,
    editStatus: state.recipesReducer.recStatus
  };
};

export default connect(mapStateToProps, { addNewRecipe, editRecipe })(Nav);
