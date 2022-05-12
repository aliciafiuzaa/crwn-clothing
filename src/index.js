import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/products.context';
import { CartProvider } from './context/cart.context';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const rootElement = document.getElementById('root');
// think if whatever you're wraping actually need access to what you're providing
// does the BrowserRouter ever need our products? NO
// does UserProvider need access to products? It depends, what is more usefull?
// the user provider access products or product provider to access the user?
// if we have an international store, the products shown can be different depending on where the user is based
render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
