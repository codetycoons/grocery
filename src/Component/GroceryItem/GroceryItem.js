import React, { useRef, useState } from "react";
import EditGroceryItem from "../EditGroceryItem/EditGroceryItem";
import classes from "./GroceryItem.module.scss";

function GroceryItem({
  item,
  dispatchRemoveGrocery,
  dispatchEdiGrocery,
  dispatchPurchaseGrocery,
}) {
  const [isEdit, setEdit] = useState(false);
  const editableRef = useRef(null);
  const { id, qty, value, isPurchased } = item;
  return (
    <div className={classes.GroceryItem}>
      <div
        onClick={() => !isEdit && dispatchPurchaseGrocery(id)}
        className={`${classes.name} ${isEdit ? classes.editable : ""}`}
        style={{ color: isPurchased ? "red" : "black" }}
        contentEditable={isEdit}
        suppressContentEditableWarning={true}
        ref={editableRef}
      >
        {value}
      </div>
      <div className={classes.actions}>
        {qty > 1 && <span className={classes.quantity}>{qty}</span>}
        {isEdit && (
          <button
            onClick={() => {
              editableRef.current.innerText !== value &&
                dispatchEdiGrocery(id, editableRef.current.innerText);
              setEdit(false);
            }}
          >
            Done
          </button>
        )}
        {!isEdit && (
          <button
            onClick={() => {
              console.log(editableRef.current);
              editableRef.current.focus();
              setEdit(!isEdit);
            }}
          >
            Edit
          </button>
        )}
        <button onClick={() => dispatchRemoveGrocery(id)}>Remove</button>
      </div>
    </div>
  );
}

export default GroceryItem;
