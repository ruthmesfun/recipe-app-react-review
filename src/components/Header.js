import React, { Fragment } from 'react'
import { Navbar } from 'react-materialize'

class Header extends React.Component {
  state = {
    search: ''
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      this.props.filterCategories(this.state.search)
    })
  }

  render() {
    return (
      <Fragment>
        <Navbar brand='Recipe App' right />

        <div className='container'>
          <h5>Filter by Category:</h5>
          <input type='text' onChange={this.handleChange} value={this.state.search} />
        </div>
      </Fragment>
    )
  }

}

export default Header
