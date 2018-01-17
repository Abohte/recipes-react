import ApiClient from '../../api/client'
import { push } from 'react-router-redux'
import { loading } from '../loading'

const api = new ApiClient()
export const USER_SIGNED_IN = 'USER_SIGNED_IN'

export default (user) => {
  return dispatch => {
    const path = 'sessions'
    dispatch(loading(path, true))
    api.post(path, {...user})
      .then(res => {
        dispatch(loading(path, false))
        api.storeToken(res.body.token);
        api.get('users/me')
          .then(res => {
            dispatch({ type: USER_SIGNED_IN, payload: res.body })
            dispatch(push(''))
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        dispatch(loading(path, false))
        console.error(err)
      })

  }
}
