import React, { useState } from 'react';
import CartContext from './Cart-context';

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    if (items.length === 0) {
      setItems([item]);
    } else {
      const isItemPresent = items.find((each) => each.title === item.title);

      if (isItemPresent) {
        alert('This item is already added to the cart');
      } else {
        setItems([...items, item]);
      }
    }
  };

  const removeItemFromCartHandler = (id) => {
    console.log(id);
    const afterRemovedList = items.filter((each) => each.id !== id);
    console.log(afterRemovedList);
    setItems(afterRemovedList);
  };

  const updateItemHandler = (id, quantity) => {
    const updatedArr = items.map((each) => {
      if (each.id === id) {
        return { ...each, quantity: quantity };
      }
      return each;
    });
    setItems(updatedArr);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItem: updateItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;