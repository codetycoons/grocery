import React, { useState } from "react";
import GroceryInput from "../../Component/GroceryInput/GroceryInput";
import { useDispatch } from "react-redux";
import { AddGrocery } from "../../actions";
import classes from "./GroceryInputContainer.module.scss";
function GroceryInputContainer() {
  const [grocery, setGrocery] = useState("");
  const dispatch = useDispatch();
  const addGrocery = (grocery) => dispatch(AddGrocery(grocery));

  return (
    <div className={classes.GroceryInputContainer}>
      <GroceryInput
        value={grocery}
        onChange={setGrocery}
        dispatch={addGrocery}
      />
    </div>
  );
}

export default GroceryInputContainer;
