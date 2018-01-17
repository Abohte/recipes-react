import ApiClient from '../../api/client'

const api = new ApiClient()

export default (user) => {
  return dispatch => {
    api.post('sessions', {...user})
      .then(res => {
        api.storeToken(res.body.token);
        api.get('users/me')
          .then(res => {
            dispatch({ type: 'USER_SIGNED_IN', payload: res.body })
          })
      })
      .catch((err) => console.error(err))

  }
}
