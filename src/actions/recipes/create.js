export const createRecipe = (newRecipe) => {
  return {
    type: 'CREATE_RECIPE',
    payload: newRecipe
  }
}
