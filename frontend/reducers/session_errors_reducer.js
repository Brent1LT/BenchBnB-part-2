import {RECEIVE_CURRENT_USER, RECEIVE_ERRORS} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = {}, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {session: action.errors};
    case RECEIVE_ERRORS:
      return {session: []};
    default: 
      return oldState;
  }
};

export default sessionErrorsReducer;