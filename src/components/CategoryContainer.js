import React from 'react'
import Category from './Category'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class CategoryContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map(c => {
          return <Category className='category' findRecipes={this.props.findRecipes} key={c.idCategory} category={c} />
        })}
      </div>
    )
  }
}

export default CategoryContainer