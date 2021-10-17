import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const isshown = useSelector((state) => state.isshown.isshow);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch("https://cart-109f4-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT", // or 'PUT'

      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Fragment>
      <Layout>
        {isshown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
