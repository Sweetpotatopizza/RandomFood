import React from "react";
import styles from "./food_detail.module.css";
import OutsideClickHandler from "react-outside-click-handler";

const FoodDetail = ({ food }) => (
  <OutsideClickHandler
    onOutsideClick={() => {
      console.log("hi");

    }}
  >
    <section className={styles.}>
      <div>{food.title}</div>
      <img src={food.image} alt="" />
    </section>
  </OutsideClickHandler>
);

export default FoodDetail;
