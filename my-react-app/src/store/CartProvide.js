import React from 'react';
import CartContext from "./cart-context.js";

const CardProvide = (props) => {
    const addItemToCartHandle = (item) => {

    }

    const removeItemFromCartHandle = (id) => {

    }

    const CartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandle,
        removeItem:removeItemFromCartHandle
    }

    return (
      <CartContext.Provider value={CartContext}>
         <props.children/>
      </CartContext.Provider>
    )
}

export default CardProvide;

