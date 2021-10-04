// The root reducer is the main reducer containing combined data from all other reducers
// combineReducers is used to bundle all the data into 1 object
import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
