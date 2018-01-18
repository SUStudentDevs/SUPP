import * as A from '../actions/auth';

const initialState = {
  username: null,
  token: null
};

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