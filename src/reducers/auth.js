import * as A from '../actions/auth';

const initialState = {
  isLoggedIn: false,
  isLogging: false,
};

const auth = (state = initialState, action) => {
  switch(action.type){
    case A.AUTH_START:
      return {...state,
        isLoggedIn: false,
        isLogging: true,
    };

    case A.AUTH_COMPLETE:
      return {...state,
      isLoggedIn: true,
      isLogging: false,
    };

    case A.AUTH_FAILED:
      return {...state,
        isLoggedIn: false,
        isLogging: false,
    };

    case A.AUTH_TERMINATE:
      return {...state, 
        isLoggedIn: false,
        isLogging: false,
    };

    default:
      return state;
  } 
};

export default auth;
