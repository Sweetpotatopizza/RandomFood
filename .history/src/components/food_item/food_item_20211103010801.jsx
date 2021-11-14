import React from "react";
import styles from "./food_item.module.css";

const FoodItem = React.forwardRef({ food, onFoodClick }) => (
  <div className={styles.box} onClick={() => onFoodClick(food)}>
    <div className={styles.food}>
      <img className={styles.img} src={food.image} alt="food image" />
    </div>
    <p className={styles.title}>{food.title}</p>
  </div>
);

export default FoodItem;
