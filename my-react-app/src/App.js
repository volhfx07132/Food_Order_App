import "./App.css";
import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Card from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Card/>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
