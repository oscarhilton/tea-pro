import axios from 'axios';
import { FETCH_USER, LOAD_TEAS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('./api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const loadTeas = () => async dispatch => {
  const res = await axios.get('./api/teas');

  dispatch({ type: LOAD_TEAS, payload: res.data.teas });
};
