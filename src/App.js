import React, { Component } from 'react'
import './App.css'
import { Row, Col } from 'react-materialize'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'
import Header from './components/Header'

class App extends Component {
  state = {
    categories: [],
    filteredCategories: [],
    recipes: [],
    myRecipes: []
  }

  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(r => r.json())
    .then(result => {
      this.setState({
        categories: result.categories,
        filteredCategories: result.categories
      })
    })
  }

  getRecipes = (category) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then(r => r.json())
    .then(result => {
      this.setState({
        recipes: result.meals
      })
    })
  }

  filterCategories = (search) => {
    this.setState({
      filteredCategories: this.state.categories.filter(c =>
        c.strCategory.toLowerCase().includes(search.toLowerCase())
      )
    })
  }

  updateRecipes = (recipe) => {
    if (this.state.myRecipes.includes(recipe)) {
      this.setState({
        myRecipes: this.state.myRecipes.filter(r => r !== recipe),
        recipes: [...this.state.recipes, recipe]
      })
    } else {
      this.setState({
        myRecipes: [...this.state.myRecipes, recipe],
        recipes: this.state.recipes.filter(r => r !== recipe)
      })
    }
  }

  render() {
    return (
      <div>
        <Header filterCategories={this.filterCategories} />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer
              categories={this.state.filteredCategories}
              getRecipes={this.getRecipes}
            />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer
              recipes={this.state.recipes}
              updateRecipes={this.updateRecipes}
            />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer
              recipes={this.state.myRecipes}
              updateRecipes={this.updateRecipes}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
