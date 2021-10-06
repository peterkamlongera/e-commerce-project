import {createSelector} from "reselect";

const selectCart = state => state.cart;
const selectUser = state => state.user;

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);
