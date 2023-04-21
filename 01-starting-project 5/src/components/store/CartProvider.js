import { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // check if an item exist using its index, if the item we are currently looking at has the same id as the item that was added
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // if the item is already part of the array it will be set to the below constant.
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    // update the amount if the item exist
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // so as to update this immutably without editing the old array
      updatedItems = [...state.items];
      // override the old item with the updated item
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // if the item does not exist
    else {
      // update the current state item with the new item immutably.
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedAmount };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((items) => items.id !== action.id);
    } else {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    }

    return { items: updatedItems, totalAmount: updatedAmount };
  }
  return defaultCartState;
};
// Manage cart context data and provide that context to all components that want access to it
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // component-wide data
  const cartData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartData}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
