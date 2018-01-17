import * as A from '../actions/auth';

const initialStates = {
  isLoggedIn: false,
  isLogging: false,
  user: null
};

const auth = (state = initialStates, action) => {
  switch(action.type){
    case A.AUTH_START:
      return {...state,
        isLoggedIn: false,
        isLogging: true,
        user: action.user
    };

    case A.AUTH_COMPLETE:
      return {...state,
      isLoggedIn: true,
      isLogging: false,
      user: action.user
    };

    case A.AUTH_FAILED:
      return {...state,
        isLoggedIn: false,
        isLogging: false,
        user: null
    };

    case A.AUTH_TERMINATE:
      return {...state, 
        isLoggedIn: false,
        isLogging: false,
        user: null    
    };

    default:
      return state;
  } 
};

export default auth;
