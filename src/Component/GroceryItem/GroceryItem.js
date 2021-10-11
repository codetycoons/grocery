import React from "react";
import EditGroceryItem from "../EditGroceryItem/EditGroceryItem";
import classes from "./GroceryItem.module.scss";

function GroceryItem({
  item,
  dispatchRemoveGrocery,
  dispatchEdiGrocery,
  dispatchPurchaseGrocery,
  EditGroceryItemInput,
}) {
  const { id, qty, value, isPurchased } = item;
  return (
    <div className={classes.GroceryItem}>
      <div
        onClick={() => dispatchPurchaseGrocery(id)}
        className={classes.name}
        style={{ color: isPurchased ? "red" : "black" }}
      >
        <span>{value}</span>
      </div>
      <div className={classes.actions}>
        {qty > 1 && <span className={classes.quantity}>{qty}</span>}
        <button onClick={() => dispatchEdiGrocery(id, value)}>Edit</button>
        <button onClick={() => dispatchRemoveGrocery(id)}>Remove</button>
      </div>
    </div>
  );
}

export default GroceryItem;
