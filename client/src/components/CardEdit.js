import React from "react";
import { connect } from "react-redux";

import { addNewRecipe, editRecipe, editNewRecipe } from "../actions/recipeActions";

class CardEdit extends React.Component {
  constructor(props){
    super(props);
        this.state = {
          newRecipe: "", recStatus: false, 
          newRecipeMat: "", editStatus: false, newRecipeDir:""
        };
  }
        handleChanges = (e) => {
          this.setState({ newRecipe: e.target.value});
        };
        handleMatChanges = (e) => {
          console.log('withinhandlematchanges',this.props.key)
          console.log(this.props.recipes[0].recipeMat)
          this.setState({ newRecipeMat: e.target.value });
        };
        handleDirChanges = (e) =>{
          this.setState({newRecipeDir: e.target.value})
        };
        // handleRecStatus = (e) =>{
        //   this.props.editRecipe();
        //   this.setState({recStatus: !this.state.recStatus})
        //   this.setState({editStatus: !this.state.editStatus})
        //   console.log('status '+this.state.recStatus)
        // };
        // handleh3 = (e) =>{
        //   /// Makes a brand new card Maybe need a new Compionent and use component did mount
        //   if(this.state.recStatus){
        //     ( <input
        //       type="text"
        //       value={this.state.newRecipeMat}
        //       onChange={this.handleMatChanges}
        //       placeholder="Add new Recipe Materials"
              
        //        >
        //           new Mat here
        //       </input>)
        //       //Changes bercause of the editmat
        //       this.props.editMat(this.state.newRecipeMat);
        //    }
        // }
  
  render() {
    return (
      <React.Fragment>


        
        <input
          type="text"
          value={this.props.newRecipe}
          onChange={this.handleChanges}
          placeholder="Edit New Recipe Title"
        />
        <input
          type="text"
          value={this.props.newRecipeMat}
          onChange={this.handleMatChanges}
          placeholder="Edit New Recipe Materials"
        />
        <input
          type="text"
          value={this.props.newRecipeDir}
          onChange={this.handleDirChanges}
          placeholder="Edit New Recipe Directions"
        />
        <button
          onClick={() => {
            this.props.editNewRecipe(this.state.newRecipeMat);
            // this.props.addNewRecipe(this.state.newRecipe);
            // this.props.addNewRecipeMat(this.state.newRecipeMat);
          }}
        >
          Edit Recipes
        </button>
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

export default connect(mapStateToProps, { addNewRecipe, editRecipe, editNewRecipe })(CardEdit);
