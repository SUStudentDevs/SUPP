/**
 * Utility functions for user authentification
 * @module utils/auth
 * @author Ulysse Fontaine
 */

import axios from 'axios'

/**
 * Login method
 * @param {string} username - The username entered
 * @param {string} password - The password entered
 * @return {object} If success, contains user data and token. Else, contains error message
 */
const login = (username, password) =>
  axios.post('http://localhost:4000/login/', {
    username: username,
    password: password
  }, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

/**
 * Logout method
 * @param {object} user - The user
 * @return {object} null
 */
const logout = (user) => {
  return null
}

export const authService = {
  login,
  logout
}
