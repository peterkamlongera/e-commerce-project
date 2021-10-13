import ShopActionTypes from "./shop.types";

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTONS,
  payload: collectionsMap
});
