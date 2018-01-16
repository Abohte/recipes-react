import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchRecipes } from '../actions/recipes'
import Title from '../components/Title'
import RecipeCategory from './RecipeCategory'
import './RecipePage.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

export class RecipePage extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
  }

  componentWillMount() {
    this.props.fetchRecipes()
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, photo } = this.props
    const categories = { vegan, vegetarian, pescatarian }

    if (!title) return null

    return(
      <div className="recipe page">
        <header>
          <div
            className="recipe-cover"
            style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />
          <div>
            <Title className="Title level-2" content={ title } />

            <ul className="categories">
              <RecipeCategory { ...categories } />
            </ul>
          </div>
        </header>
        <div>
          <p className="recipe-summary">{ summary }</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }, { match }) => {
  const recipe = recipes.reduce((prev, next) => {
    if (next._id === match.params.recipeId) {
      return next
    }
    return prev
  }, {})

  return {
    ...recipe
  }
}

export default connect(mapStateToProps, { fetchRecipes })(RecipePage)
