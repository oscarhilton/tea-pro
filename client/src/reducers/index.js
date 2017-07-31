import { combineReducers } from 'redux';
import authReducer from './authReducer';
import teasReducer from './teasReducer';

export default combineReducers({
  auth: authReducer,
  teas: teasReducer
});
