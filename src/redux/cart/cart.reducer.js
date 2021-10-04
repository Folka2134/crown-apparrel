import { cartActionTypes } from "./cart.types";

const INITIAL_STATE = {
  hidden: true,
};

const cartReducer = (currrentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currrentState,
        hidden: !currrentState.hidden,
      };
    default:
      return currrentState;
  }
};

export default cartReducer;
