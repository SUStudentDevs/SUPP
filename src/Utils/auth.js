/**
 * Utility functions for user authentification
 * @module Utils/auth
 * @author Ulysse Fontaine
 */

/**
 * Login method
 * @param {string} username - The username entered
 * @param {string} password - The password entered
 * @return {object} If success, contains user data and token. Else, contains error message
 */
const login = (username, password) => {
  console.log('username: ' + username);
  if(username === 'ok') {
    return ({username: username, token: "token"});
  } else {
    return ({message: "Message"});
  }
}

/**
 * Logout method
 * @param {object} user - The user
 * @return {object} null
 */
const logout = (user) => {
  return null;
}

export const authService = {
  login,
  logout
}

