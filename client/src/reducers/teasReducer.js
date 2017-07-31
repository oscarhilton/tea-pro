import { LOAD_TEAS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case LOAD_TEAS:
      return action.payload;
    default:
      return state;
  }
}
