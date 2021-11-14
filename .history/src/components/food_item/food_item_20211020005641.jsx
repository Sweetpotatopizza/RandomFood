import React from "react";
import styles from "./food_item.module.css";
import OutsideClickHandler from "react-outside-click-handler";

// function MyComponent() {
//   return (
//     <OutsideClickHandler
//       onOutsideClick={() => {
//         alert("You clicked outside of this component!!!");
//       }}
//     >
//       Hello World
//     </OutsideClickHandler>
//   );
// }

const FoodItem = ({ food, onFoodClick }) => (
  <OutsideClickHandler
    onOutsideClick={() => {
      alert("You clicked outside of this component!!!");
      return 0;
    }}
  >
    <div className={styles.box} onClick={() => onFoodClick(food)}>
      <div className={styles.food}>
        <img className={styles.img} src={food.image} alt="food image" />
      </div>
      <p className={styles.title}>{food.title}</p>
    </div>
  </OutsideClickHandler>
);

export default FoodItem;
