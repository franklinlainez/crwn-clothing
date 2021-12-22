import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

/* 
  Uppon recieving the urlParam, it returns the function 'createSelector'
*/

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) => {
    return collections ? collections[collectionUrlParam] : null;
  })
);
