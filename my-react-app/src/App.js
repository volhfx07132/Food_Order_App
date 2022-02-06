import "./App.css";
import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/Cart/Cart";
import CartContext from "./store/CartProvide";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideShowCartHandle = () => {
    setCartIsShow(false);
  };

  return (
    <CartContext>
      {cartIsShow && <Card onClose={hideShowCartHandle} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContext>
  );
}

export default App;
