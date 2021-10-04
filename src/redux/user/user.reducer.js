import { userActionTypes } from "./user.types.js";

// We set an initial state so our reducer has a state to work off of on the initial run
// With ES6 we can pass the initial state as a default parameter
const INITIAL_STATE = {
  currentUser: null,
};

// Our reducer is simply a function which receives a state and an action object
// The action object contains 2 properties: type and payload
// If the action.type is relevent to this reducer then it will update the currentState
// by returning a new state object containing the previous state + whatever property we want to update
// The property is updated with whatever comes from action.payload
// If the action.type isn't relevent to the reducer then just return the currentState object with no ammendments

const userReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload,
      };
    default:
      return currentState;
  }
};

export default userReducer;
