import React from "react";
import classes from "./GroceryInput.module.scss";

function GroceryInput({ value, onChange, dispatch }) {
  return (
    <div className={classes.GroceryInput}>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button
        className={classes.btn_add}
        onClick={() => {
          if (!value) return;
          dispatch(value);
          onChange("");
        }}
      >
        Add Grocery
      </button>
    </div>
  );
}

export default GroceryInput;
