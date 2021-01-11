import React from "react";
import { connect } from "react-redux";

import { addNewRecipe, editRecipe, editNewRecipe } from "../actions/recipeActions";

class CardEdit extends React.Component {
  constructor(props){
    super(props);
    // newRecipeDir needs to either be changed into a string like all the others. or 
    // Or the array elements each need a new line feature at each step of the directions so each array is one new line and has numeric srteps written out fro each procedure
        this.state = {
          newRecipe: this.props.recipes[this.props.oneToEdit].name, recStatus: false, 
          newRecipeMat: this.props.recipes[this.props.oneToEdit].recipeMat, editStatus: false,
           newRecipeDir:[ this.props.recipes[this.props.oneToEdit].recipeDir], oneToEdit: [0]
        };
  }
        handleChanges = (e) => {
          this.setState({ newRecipe: e.target.value});
          };
        handleMatChanges = (e) => {
          console.log('withinhandlematchanges',this.props.oneToEdit)
          console.log(this.props.recipes[this.props.oneToEdit].name)
          
          this.setState({ newRecipeMat: e.target.value });
          };
        handleDirChanges = (e) =>{
          this.setState({newRecipeDir: [e.target.value]})
          
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


        <label for='title'>
        Title
        </label>
        <input
          type="text"
          value={this.state.newRecipe}
          onChange={this.handleChanges}
          placeholder={this.state.newRecipe}
        />
        <label for='materials'>
          Materials
        </label>
        <input
          type="text"
          value={this.state.newRecipeMat}
          onChange={this.handleMatChanges}
          placeholder={this.state.newRecipeMat}
        />
        <label for='directions'>
          Directions
        </label>
        <input
          type="text"
          value={this.state.newRecipeDir[0]}
          onChange={this.handleDirChanges}
          placeholder={this.state.newRecipeDir[0]}
        />
        <button
          onClick={() => {

            
            this.props.recipes[this.props.oneToEdit].recipeMat = this.state.newRecipeMat;
            this.props.recipes[this.props.oneToEdit].name = this.state.newRecipe;
        
            this.props.recipes[this.props.oneToEdit].recipeDir = this.state.newRecipeDir;
            
            // this.props.editNewRecipe({recipes:this.state});
            // this.props.addNewRecipe(this.state.newRecipe);
            // this.props.addNewRecipeMat(this.state.newRecipeMat);
          }}
        >
          1st Clk This Button Then Clk Save
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
