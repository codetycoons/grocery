import React from "react";
import GroceryInputContainer from "../GroceryInputContainer/GroceryInputContainer";
import GroceryList from "../GroceryList/GroceryList";
import classes from "./Layout.module.scss";

function Layout() {
  return (
    <div className={classes.Layout}>
      <GroceryInputContainer />
      <GroceryList />
    </div>
  );
}

export default Layout;
