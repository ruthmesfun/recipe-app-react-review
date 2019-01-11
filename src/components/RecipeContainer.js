import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {
  checkData = () => {
    if ('recipes' in this.props) {
      return this.props.recipes.map(r => {
        // console.log(r.strMeal);
        return <Recipe addOrDeleteRecipe={this.props.addOrDeleteRecipe} key={r.idMeal} recipe={r}/>
      })
    }
  }

  render() {
    // console.log(this.props.recipes);

    return (
      <div>
        {this.checkData()}
      </div>
    )
  }
}

export default RecipeContainer