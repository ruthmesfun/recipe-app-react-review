import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            {/* how can we render categories here? */}
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            {/* how can we render recipes here? */}
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            {/* how can we render recipes here? */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
