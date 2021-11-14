import React from "react";
import styles from "./food_detail.module.css";

const FoodDetail = ({ food }) => (
  <section className={styles.section}>
    <img src={food.image} alt="" />
    <div>{food.title}</div>
    <div>{food.cuisines}</div>
    <div>{food.cuisines}</div>

  </section>
);

export default FoodDetail;
