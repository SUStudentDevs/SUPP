const login = (username, password) => {
  console.log('username: ' + username);
  if(username === 'ok') {
    return ({username: username, token: "token"});
  } else {
    return ({message: "Message"});
  }
}

const logoff = (user) => {
  return null;
}

export const authService = {
  login,
  logoff
}

