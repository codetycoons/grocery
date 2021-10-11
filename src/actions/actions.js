import * as actionTypes from "./actionTypes";
let groceryQty = 1;

export const AddGrocery = (value) => ({
  type: actionTypes.ADD_GROCERY,
  value: { value, qty: groceryQty, isPurchased: false },
});

export const RemoveGrocery = (id) => ({
  type: actionTypes.REMOVE_GROCERY,
  id: id,
});

export const ClearGroceryList = () => ({
  type: actionTypes.CLEAR_GROCERY_LIST,
});

export const EditGrocery = (id, value) => ({
  type: actionTypes.EDIT_GROCERY,
  id: id,
  value: value,
});

export const PurchaseGrocery = (id) => ({
  type: actionTypes.PURCHASE_GROCERY,
  id: id,
});
