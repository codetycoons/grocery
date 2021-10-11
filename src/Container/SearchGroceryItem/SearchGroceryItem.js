import React, { useState } from "react";
import SearchGroceryInput from "../../Component/SearchGroceryInput/SearchGroceryInput";

function SearchGroceryItem() {
  const [searchValue, setsearchValue] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <SearchGroceryInput
      searchValue={searchValue}
      setsearchValue={setsearchValue}
      showSearchInput={showSearchInput}
      setShowSearchInput={setShowSearchInput}
    />
  );
}

export default SearchGroceryItem;
