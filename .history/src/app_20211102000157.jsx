import { Component, useEffect, useState, useRef } from "react";
import styles from "./app.module.css";
import FoodDetail from "./components/food_detail/food_detail";
import FoodList from "./components/food_list/food_list";
import SearchHeader from "./components/search_header/search_header";
// import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const ref = useRef();
  const [foods, setFoods] = useState([]);
  const [isSelectedFood, setIsSelectedFood] = useState();
  const [isFoodOpen, setIsFoodOpen] = useState(false);

  const selectFood = (food) => {
    setIsSelectedFood(food);
  };

  // const handleOpen = (e) => {
  //   e.preventDefault();
  //   setIsFoodOpen((prevState) => !prevState);
  // };

  // const closeFood = () => {
  //   setIsFoodOpen(false);
  // };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isFoodOpen && ref.current && !ref.current.contains(e.target)) {
        setIsFoodOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
    // }, []);
  }, [isSelectedFood]);

  return (
    // <div className={styles.app} ref={ref}>
    <div className={styles.app}>
      <SearchHeader />
      <div className={styles.detail}>
        {isSelectedFood && <FoodDetail food={isSelectedFood} />}
      </div>

      <div
        className={styles.list}
        onClick={() => setIsFoodOpen((oldstate) => !oldstate)}
        ref={ref}
        // onClick={handleOpen}
      >
        {/* {isSelectedFood && (
            <FoodList
              foods={foods}
              onFoodClick={selectFood}
              // closeFood={closeFood}
            />
          )} */}
        <FoodList foods={foods} onFoodClick={selectFood} />
        {/* <FoodList foods={foods} /> */}
      </div>
    </div>
  );
}

export default App;
