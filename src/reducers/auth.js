import * as A from '../actions/auth';

const initialState = {
  isLoggedIn: false,
  isLogging: false,
  hasLoggingFailed: false
};

const auth = (state = initialState, action) => {
  switch(action.type){
    case A.AUTH_START:
      return {...state,
        isLoggedIn: false,
        isLogging: true,
        hasLoggingFailed: false
    };

    case A.AUTH_COMPLETE:
      return {...state,
      isLoggedIn: true,
      isLogging: false,
      hasLoggingFailed: false
    };

    case A.AUTH_FAILED:
      return {...state,
        isLoggedIn: false,
        isLogging: false,
        hasLoggingFailed: true
    };

    case A.AUTH_TERMINATE:
      return {...state, 
        isLoggedIn: false,
        isLogging: false,
        hasLoggingFailed: false
    };

    default:
      return state;
  } 
};

export default auth;
