import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("useEffect from _app.js");
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = () => {
    localStorage.setItem("cart,myCart");
    let subt = 0;
    let keys = Object.keys(cart);
    for (i = 0; keys.length; i++) {
      subt += cart[keys[i]].price * cart[keys[i]].qty;
    }
    setSubTotal(subt);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let myCart = cart;
    if (itemCode in cart) {
      myCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      myCart[itemCode] = { qty: 1, price, name, size, variant };
    }
    setCart(myCart);
    saveCart(myCart);
  };

  const removeFromCart = () => {
    let myCart = cart;
    if (itemCode in cart) {
      myCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (myCart[itemCode].qty <= 0) {
      delete myCart[itemCode];
    }
    setCart(myCart);
    saveCart(myCart);
  };
  return (
    <>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      ;
      <Footer />
    </>
  );
}
