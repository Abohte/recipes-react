import ApiClient from '../../api/client'

const api = new ApiClient()

export default (user) => {
  return dispatch => {
    api.post('users', {...user})
      .then(res => {
        const { email, password } = user
      })
      .catch((err) => console.error(err))
    }
  }
