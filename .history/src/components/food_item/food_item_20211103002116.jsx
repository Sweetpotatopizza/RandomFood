import React from "react";
import styles from "./food_item.module.css";
import OutsideClickHandler from "react-outside-click-handler";

const FoodItem = ({ food, onFoodClick, ref }) => (
  // const FoodItem = ({ food }) => (
  <div className={styles.box} onClick={() => onFoodClick(food)} ref={ref}>
    if
    <div className={styles.food}>
      <img className={styles.img} src={food.image} alt="food image" />
    </div>
    <p className={styles.title}>{food.title}</p>
  </div>
);

export default FoodItem;