import React from "react";
import styles from "./food_item.module.css";

const onClick = () => {
  console.log("hi");
};

const FoodItem = ({ food }) => (
  <li className={styles.box} onClick={onClick}>
    <div className={styles.food}>
      <img className={styles.img} src={food.image} alt="food image" />
    </div>
    <p className={styles.title}>{food.title}</p>
  </li>
);

export default FoodItem;
