/**
 * Reducers related to the user
 * @module reducers/user
 * @author Basile Pesin
 */
import * as A from '../actions/auth';

const initialState = {
  username: null,
  token: null
};

/**
 * User reducer
 * @param {object} state - The current state of the app
 * @param {object} action - The dispatched action
 * @return {object} The new state of the app
 */
const user = (state = initialState, action) => {
  switch(action.type) {
    case A.AUTH_COMPLETE:
      return {...state,
        username:action.user.username,
        token:action.user.token
      };

    case A.AUTH_TERMINATE:
      return initialState;

    default:
      return state;
  }
}

export default user;
