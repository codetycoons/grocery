import React from "react";
import search from "../../assets/search.png";
import classes from "./SearchGroceryInput.module.scss";
import { debounce } from "../../utils/utils";

function SearchGroceryInput({
  searchValue,
  setsearchValue,
  showSearchInput,
  setShowSearchInput,
}) {
  return (
    <div className={classes.SearchGroceryInput}>
      {showSearchInput && (
        <input
          className={showSearchInput ? `${classes.width_full}` : ""}
          type="text"
          value={searchValue}
          onChange={(event) => setsearchValue(event.target.value)}
        />
      )}
      <img
        src={search}
        onClick={() => {
          setShowSearchInput(!showSearchInput);
          setsearchValue("");
        }}
      />
    </div>
  );
}

export default SearchGroceryInput;
