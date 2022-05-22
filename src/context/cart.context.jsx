import { createContext, useEffect, useState } from 'react';
// helper function
const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  // if found, increment quantity
  if(existingCartItem) {
    // we don't do mutations, we always return a new array with new objects, otherwise we return the same one
    return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
      {...cartItem, quantity: cartItem.quantity + 1}
      : cartItem
    );
  }
  // return new array with modify cartItems / new cart Item
  return [...cartItems, { ...productToAdd, quantity: 1 }];

};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  // product with an aditional quantity field
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount)
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };
  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}
