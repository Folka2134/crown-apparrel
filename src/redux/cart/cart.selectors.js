import { createSelector } from "reselect";

// input selector
// grab a specific section of state - cart
const selectCart = (state) => state.cart;

// Create selector takes 2 arguments,
// an array of input selectors
// and a function to return values we want from the selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

// output selector

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0)
);
