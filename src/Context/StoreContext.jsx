import React, { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);
  const add = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const remove = (itemId) => {
    setCartItem((prev) =>
      // if (!prev[itemId]) return prev;
      // if (prev[itemId] === 1) {
      //     const updatedCart = { ...prev };
      //     delete updatedCart[itemId];
      //     return updatedCart;
      // }
      // return { ...prev, [itemId]: prev[itemId] - 1 };
      ({ ...prev, [itemId]: prev[itemId] - 1 })
    );
  };

  const getTotalCartAmount = () => {
    let totalAmount=0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItem[item];
      }
    }
    return totalAmount;
  };
console.log(getTotalCartAmount())
  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    add,
    remove,
    getTotalCartAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
