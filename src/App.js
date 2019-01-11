import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'

class App extends Component {

  state = {
    categories: [],
    recipes: [],
    myRecipes: [],
    filtered: []
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => {
      this.setState({
        categories: data.categories
      })
    })
  }

  filterCategory = (input) => {
    let filtered = this.state.categories.filter(c => c.strCategory.toLowerCase().includes(input.toLowerCase()))
    this.setState({
      filtered: filtered
    })
  }

  findRecipes = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        recipes: data.meals
      })
    })
  }

  addOrDeleteRecipe = (recipe) => {
    if (!this.state.myRecipes.includes(recipe)) {
      const copy = this.state.recipes.filter(r => r !== recipe)
      this.setState({
        myRecipes: [...this.state.myRecipes, recipe],
        recipes: copy
      })
    } else {
      const copy = this.state.myRecipes.filter(r => r !== recipe)
      this.setState({
        myRecipes: copy,
        recipes: [...this.state.recipes, recipe]
      })
    }
  }

  render() {
    return (
      <div>
        <Header filterCategory={this.filterCategory} />
        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer findRecipes={this.findRecipes} categories={this.state.filtered.length !== 0 ? this.state.filtered : this.state.categories}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer recipes={this.state.recipes} addOrDeleteRecipe={this.addOrDeleteRecipe}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer recipes={this.state.myRecipes} addOrDeleteRecipe={this.addOrDeleteRecipe}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;