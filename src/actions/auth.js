/**
 * @file Describes actions related to authentification
 * @module actions/auth
 * @author Ulysse Fontaine
 */
import { authService } from '../utils/auth'

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
    if (username === '' || password === '') {
      dispatch(authFailed('You must enter a username and a password !'))
      return
    }
    authService.login(username, password).then(
      (res) => dispatch(authComplete(res.data.token, username)),
      (error) => dispatch(authFailed(error)))
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
export const authComplete = (token, username) => {
  // console.log(user)
  return {
    type: AUTH_COMPLETE,
    auth: {
      token: token
    },
    user: {
      username: username
    }
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
