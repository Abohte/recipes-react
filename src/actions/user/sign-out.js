import ApiClient from '../../api/client'
import { push } from 'react-router-redux'

const api = new ApiClient()
export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

export default (user) => {
  return dispatch => {
    api.signOut()
    dispatch(push(''))
    dispatch({ type: USER_SIGNED_OUT })
  }
}
