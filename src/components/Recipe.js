import React from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

const Recipe = (props) => {
  return (
    <Card
      key={v4()}
      header={<CardTitle key={v4()} image={/* recipe image here */} />}
      title={/* recipe name here */}
      onClick={/* add to my list or remove recipe from my list */}
    />
  )
}

export default Recipe
