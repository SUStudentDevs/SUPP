/**
 * @file Describes actions related to authentification
 * @module actions/auth
 * @author Ulysse Fontaine
 */
import { authService } from '../Utils/auth'

export const AUTH_START = 'AUTH_START'
export const AUTH_COMPLETE = 'AUTH_COMPLETE'
export const AUTH_FAILED = 'AUTH_FAILED'
export const AUTH_TERMINATE = 'AUTH_TERMINATE'

/**
 * login Action.
 * @params {string} username - Username for authentification
 * @params {string} password - Password for authentification
 * @returns {function} Function for dispatch
 */
export const login = (username, password) => {
  return dispatch => {
    dispatch(authStart())
    setTimeout(() => {
      const user = authService.login(username, password)

      if (user.token) dispatch(authComplete(user))
      else dispatch(authFailed(user.message))
    }, 500)
  }
}

/**
 * AUTH_START action
 * @return {object} Object containing the AUTH_START flag
 */
export const authStart = () => {
  return {
    type: AUTH_START
  }
}

/**
 * AUTH_COMPLETE action
 * @param {object} user - The user authentificated
 * @return {object} Object containing the AUTH_COMPLETE flag and the user data
 */
export const authComplete = (user) => {
  // console.log(user)
  return {
    type: AUTH_COMPLETE,
    user: user
  }
}

/**
 * AUTH_FAILED action
 * @param {string} error - The error message
 * @return {object} Object containing the AUTH_FAILED flag and the error message
 */
export const authFailed = (error) => {
  // console.log(error)
  return {
    type: AUTH_FAILED,
    error: error
  }
}

/**
 * AUTH_TERMINATE action
 * @param {object} user - Mostly null
 * @return {object} Object containing the AUTH_TERMINATE
 */
export const authTerminate = (user) => {
  authService.logout(user)
  return {
    type: AUTH_TERMINATE
  }
}
