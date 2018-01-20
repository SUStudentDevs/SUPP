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

export const authStart = (username, password) => {
  const success = (user) => { return {type: AUTH_COMPLETE, user} }
  const error = (message) => { return {type: AUTH_FAILED, message} }
  const user = authService.login(username, password)

  if (user.token) return success(user)

  return error(user.message)
}

/**
 * AUTH_COMPLETE action
 * @param {object} user - The user authentificated
 * @return {object} Object containing the AUTH_COMPLETE flag and the user data
 */
export const authComplete = (user) => {
  console.log(user)
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
  console.log(error)
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
