import { useState, useCallback } from 'react';
import Page from './pages/Page.jsx';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = useCallback((item, quantity) => {
    console.log("handle add to cart");
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      // If it exists, update the quantity
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        console.log('UpdatedCart before update: ', updatedCart[existingItemIndex]);
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;

      } 
      // If it doesn't exist, add the new item with quantity
      else if(quantity > 0) {
        return [...prevCart, { ...item, quantity }];
      }

      // If there is no change to the cart, return previous state
      else {
        return prevCart;
      }
    });
  }, []);

  const adjustQuantity = useCallback((itemId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  }, []);
  
  return (
    <>
      <Page cart={cart} updateCart={handleAddToCart} adjustQuantity={adjustQuantity}/>
    </>
  )
}

export default App
