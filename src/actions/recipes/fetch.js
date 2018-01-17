import ApiClient from '../../api/client'
import { loading, loadErrors } from '../loading' // ???
export const FETCHED_RECIPES = 'FETCHED_RECIPES'

const api = new ApiClient()

export default () => {
  return dispatch => {
    const path = 'recipes'
    const errorTest = new Error('error test')
    dispatch(loading(path, true))
    dispatch(loadErrors(errorTest))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_RECIPES, payload: res.body }))
      .catch((err) => dispatch(loadErrors(err)))

    dispatch(loading(path, false))
  }
}
