import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'

const reducers = combineReducers({
  auth,
  user
});

export default reducers;
