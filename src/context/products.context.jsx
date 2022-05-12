import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';

// for any context we need both the context value as well as the provider itself
// the provider will be a component that returns ProductContext.Provider
export const ProductsContext = createContext({
  // we want to store an array of products
  products: [],
});

export const ProductsProvider = ({ children }) => {
  // for the default value we're gonna pass PRODUCTS 
  // because we're just importing them since they're hardcoded
  const [products, setProducts] = useState(PRODUCTS);
  // what we're gonna export out of the value is the products as an object
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
  )
}