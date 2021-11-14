import { Component, useEffect, useState, useRef } from "react";
import styles from "./app.module.css";
import FoodDetail from "./components/food_detail/food_detail";
import FoodList from "./components/food_list/food_list";
import SearchHeader from "./components/search_header/search_header";

function App() {
  const ref = useRef();
  const [foods, setFoods] = useState([]);
  const [isSelectedFood, setIsSelectedFood] = useState();

  const selectFood = (food) => {
    setIsSelectedFood(food);
  };

  useEffect(() => {
    // const checkIfClickedOutside = (e) => {
    //   if (isSelectedFood && ref.current && !ref.current.contains(e.target)) {
    //     setIsSelectedFood(false);
    //   }
    // };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.spoonacular.com/recipes/random?number=4&apiKey=92cedfb0b9e844679738e6c6c90cd453",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setFoods(result.recipes))
      .catch((error) => console.log("error", error));

    // document.addEventListener("mousedown", checkIfClickedOutside);

    // return () => {
    //   document.removeEventListener("mousedown", checkIfClickedOutside);
    // };
  }, []);
// }, [isSelectedFood]);


  return (
    <div className={styles.app}>
      <SearchHeader />
      <section>
        <div className={styles.detail}>
          {isSelectedFood && <FoodDetail food={isSelectedFood} />}
        </div>

        <div
          className={styles.list}
          onClick={() => setIsSelectedFood((oldstate) => !oldstate)}
        >
          <FoodList foods={foods} onFoodClick={selectFood} />
        </div>
      </section>
    </div>
  );
}

export default App;
