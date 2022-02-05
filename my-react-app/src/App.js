import "./App.css";
import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideShowCartHandle = () => {
    setCartIsShow(false);
  }

  return (
    <Fragment> 
    {cartIsShow && <Card />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
