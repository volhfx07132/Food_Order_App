import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <h3 className={classes.description}>{props.description}</h3>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
         
      </div>
    </li>
  );
};

export default MealItem;
