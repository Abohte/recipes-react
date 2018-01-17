import request from 'superagent'

export default class ApiClient {
  defaultOptions = {
    tokenStorageKey: 'recipeApiJWT'
  }

  constructor(host, options = {}) {
    this.host = host || 'http://localhost:3030'
    this.options = { ...this.defaultOptions, ...options }
  }


  // GET path
  //
  // Example:
  //  api.get('/recipes')
  //    .then(res => console.log(res.body))
  //    .catch(err => console.log(err))
  //
  // Returns: Promise
  get(path) {
    return request
      .get(this.createUrl(path))
      .set(this.headers())
      // .then(res => console.log(res.body))
      // .catch(err => console.log(err))
  }

  post(path, data = {}) {
    // FILL IN!
    return request
      .post(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  put(path, data = {}) {
    // FILL IN!
    return request
      .put(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  patch(path, data = {}) {
    // FILL IN!
    return request
      .patch(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  delete(path) {
    // FILL IN!
    return request
      .delete(this.createUrl(path))
      .set(this.headers())
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }

    if (this.isAuthenticated()) {
      headers.Authorization = `Bearer ${this.getToken()}`
    }

    return headers
  }

  isAuthenticated() {
    return !!this.getToken()
  }

  // Create a full URL to our API, including the host and path
  createUrl(path) {
    return [this.host, path].join('/')
  }

  getToken() {
    return localStorage.getItem(this.options.tokenStorageKey)
  }

  storeToken(token) {
    localStorage.setItem(this.options.tokenStorageKey, token)
  }

  signOut() {
    localStorage.removeItem(this.options.tokenStorageKey)
  }
}
