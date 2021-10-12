import * as actionTypes from "../actions/actionTypes";
let id = 1;
function groceryReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_GROCERY:
      let exist = false;
      const newState = state.map((el) => {
        if (el.value === action.value.value) {
          exist = true;
          return { ...el, qty: el.qty + 1 };
        } else {
          return el;
        }
      });
      return exist ? newState : [...state, { ...action.value, id: id++ }];
    case actionTypes.REMOVE_GROCERY:
      return state.filter((el) => el.id !== action.id);
    case actionTypes.CLEAR_GROCERY_LIST:
      return (state = []);
    case actionTypes.PURCHASE_GROCERY:
      return state.map((el) => {
        if (el.id === action.id) return { ...el, isPurchased: !el.isPurchased };
        return el;
      });
    case actionTypes.EDIT_GROCERY:
      return state.map((el) => {
        if (el.id === action.id) return { ...el, value: action.value };
        return el;
      });
    default:
      return state;
  }
}

export default groceryReducer;
