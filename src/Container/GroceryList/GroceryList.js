import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ClearGroceryList,
  RemoveGrocery,
  EditGrocery,
  PurchaseGrocery,
} from "../../actions";
import EditGroceryItem from "../../Component/EditGroceryItem/EditGroceryItem";
import GroceryItem from "../../Component/GroceryItem/GroceryItem";
import SearchGroceryItem from "../SearchGroceryItem/SearchGroceryItem";
import classes from "./GroceryList.module.scss";
import search from "../../assets/search.png";
import { debounce } from "../../utils/utils";

function SearchGroceryInput({ searchGrocery }) {
  const [searchValue, setsearchValue] = useState("");
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <div className={classes.SearchGroceryInput}>
      {showSearchInput && (
        <input
          className={showSearchInput ? `${classes.width_full}` : ""}
          type="text"
          value={searchValue}
          onChange={(event) => {
            setsearchValue(event.target.value);
            debounce(() => searchGrocery(event.target.value), 1000);
          }}
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

function GroceryList() {
  const groceryState = useSelector((state) => state);
  const dispatch = useDispatch();
  const clearGroceryList = () => dispatch(ClearGroceryList());
  const removeGroceryFromList = (grocery) => dispatch(RemoveGrocery(grocery));
  const editGroceryFromList = (id, grocery) =>
    dispatch(EditGrocery(id, grocery));
  const purchaseGrocery = (id) => dispatch(PurchaseGrocery(id));
  const [searchList, setSearchList] = useState([]);

  const searchGrocery = (value) => {
    console.log(value, groceryState);
    setSearchList(groceryState.filter((el) => el.value === value));
  };

  return (
    <div className={classes.GroceryList}>
      <div className={classes.grocery_list_wrapper}>
        {groceryState.length > 0 && (
          <div className={classes.actions}>
            {/* <SearchGroceryItem /> */}
            <SearchGroceryInput
              searchList={searchList}
              setSearchList={setSearchList}
              searchGrocery={searchGrocery}
            />
            <a
              onClick={() => {
                clearGroceryList();
                setSearchList([]);
              }}
            >
              Clear List
            </a>
          </div>
        )}
        {groceryState.length === 0 && (
          <h3 style={{ textAlign: "center" }}>Grocery List is empty.</h3>
        )}

        {searchList.length > 0 &&
          searchList.map((el, index) => {
            return (
              <GroceryItem
                key={el.id}
                item={el}
                dispatchRemoveGrocery={removeGroceryFromList}
                dispatchEdiGrocery={editGroceryFromList}
                dispatchPurchaseGrocery={purchaseGrocery}
              />
            );
          })}

        {searchList.length === 0 &&
          groceryState.map((el, index) => {
            return (
              <GroceryItem
                key={el.id}
                item={el}
                dispatchRemoveGrocery={removeGroceryFromList}
                dispatchEdiGrocery={editGroceryFromList}
                dispatchPurchaseGrocery={purchaseGrocery}
              />
            );
          })}
      </div>
    </div>
  );
}

export default GroceryList;
