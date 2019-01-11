import React from 'react'
import Category from './Category'
import v4 from 'uuid'

class CategoryContainer extends React.Component {
  renderCategories = () => {
    return this.props.categories.map(category =>
      <Category key={v4()} {...category} getRecipes={this.props.getRecipes}/>
    )
  }

  render() {
    return (
      <div>{ this.renderCategories() }</div>
    )
  }
}

export default CategoryContainer
