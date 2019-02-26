import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UserReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case(RECEIVE_CURRENT_USER):
      let userId = action.user.id;
      return Object.assign({}, oldState, {[userId]: action.user});
    default:
      return oldState;
  }
};

export default UserReducer;