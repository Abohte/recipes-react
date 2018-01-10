import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import './App.css'

class App extends Component {
<<<<<<< HEAD
  render() {
    return (
      <div className="App">
        <RecipesContainer />
=======

  updateRecipe(id, update) {
    // console.log('[App]: updateRecipe was called!')
    // this.setState({
    //   recipes: recipes.map((recipe) => {
    //     if (recipe._id !== recipeId) return recipe
    //     return { ...recipe, ...updatedRecipe, _id: recipe._id }
    //   })
    // })
  }

  render() {
    return (
      <div className="App">
        <RecipesContainer
          updateRecipe={ this.updateRecipe.bind(this) }
        />
>>>>>>> own
      </div>
    )
  }
}

export default App
