export const LOADING = 'LOADING'
export const DONE_LOADING = 'DONE_LOADING'
export const LOAD_ERRORS = 'LOAD_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const loading = (url, loading) => ({
  type: loading ? LOADING : DONE_LOADING,
  payload: url
})

export const loadErrors = (error) => ({
  type: LOAD_ERRORS,
  payload: error
})

export const clearError = (error) => ({
  type: CLEAR_ERROR,
  payload: error
})
