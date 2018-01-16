import ApiClient from '../../api/client'

const api = new ApiClient()

export default (user) => {
  return dispatch => {
    api.post('sessions', {...user})
      .then(res => {
        api.get('users/me')
      })
      .catch((err) => console.error(err))

  }
}
