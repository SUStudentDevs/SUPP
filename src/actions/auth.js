import { authService } from '../Utils/auth';

export const AUTH_START = 'AUTH_START';
export const AUTH_COMPLETE = 'AUTH_COMPLETE';
export const AUTH_FAILED = 'AUTH_FAILED';
export const AUTH_TERMINATE = 'AUTH_TERMINATE';

export const authStart = (username, password) => {
  const success = (user) => { return {type: AUTH_COMPLETE, user} }
  const error = (message) => { return {type: AUTH_FAILED, message} }
  const user = authService.login(username, password);

  if(user.token)
    return success(user);

  return error(user.message);
}

export const authComplete = (user) => {
  console.log(user);
  return {
    type: AUTH_COMPLETE,
    user: user
  };
}

export const authFailed = (error) => {
  console.log(error);
  return {
    type: AUTH_FAILED,
    error: error
  };
}

export const authTerminate = (user) => {
  authService.logoff(user);
  return {
    type: AUTH_TERMINATE
  }
}
