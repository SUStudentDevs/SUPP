/**
 * Reducers related to authentification
 * @module reducers/auth
 * @author Ulysse Fontaine
 */
import * as A from '../actions/auth'

const initialState = {
  isLoggedIn: false,
  token: null,
  isLogging: false,
  hasLoggingFailed: false
}

/**
 * Auth reducer
 * @param {object} state - The current state of the app
 * @param {object} action - The dispatched action
 * @return {object} The new state of the app
 */
const auth = (state = initialState, action) => {
  switch (action.type) {
    case A.AUTH_START:
      return {...state,
        isLoggedIn: false,
        token: null,
        isLogging: true,
        hasLoggingFailed: false
      }
    case A.AUTH_COMPLETE:
      return {...state,
        isLoggedIn: true,
        token: action.auth.token,
        isLogging: false,
        hasLoggingFailed: false
      }

    case A.AUTH_FAILED:
      return {...state,
        isLoggedIn: false,
        token: null,
        isLogging: false,
        hasLoggingFailed: true
      }

    case A.AUTH_TERMINATE:
      return initialState

    default:
      return state
  }
}

export default auth
