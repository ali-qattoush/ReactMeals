import styles from "./FoodList.module.css";
import { useContext, useState } from "react";

import { CartContext } from "./CartProvider";

const FoodList = ({ foods }) => {
  const [inputValue, setInputValue] = useState({
    "Classic Burger": "",
    "Vegetarian Sushi Roll": "",
    "Chicken Caesar Salad": "",
    "Margherita Pizza": "",
  });
  const { state, dispatch } = useContext(CartContext);

  function amountHandler(event, name) {
    if (event.target.value >= 1) {
      setInputValue((prevInputValue) => ({
        ...prevInputValue,
        [name]: event.target.value,
      }));
    }
  }

  function addHandler(food) {
    let foodOrder = {
      name: food.name,
      price: food.price,
      amount: +inputValue[food.name],
    };

    setInputValue({
      "Classic Burger": "",
      "Vegetarian Sushi Roll": "",
      "Chicken Caesar Salad": "",
      "Margherita Pizza": "",
    });

    let foundMatch = false;

    state.forEach((item) => {
      if (item.name === foodOrder.name) {
        dispatch({
          type: "UPDATE",
          payload: {
            ...foodOrder,
          },
        });
        foundMatch = true;
      }
    });

    if (!foundMatch) {
      dispatch({ type: "ADD", payload: { ...foodOrder } });
    }

    foodOrder = {};
  }

  return (
    <div className={styles.foodListContainer}>
      {foods.map((food, index) => (
        <div key={index} className={styles.foodItem}>
          <div className={styles.foodDetails}>
            <p className={styles.foodName}>{food.name}</p>
            <p className={styles.foodDescription}>{food.description}</p>
            <p className={styles.foodPrice}>${food.price}</p>
          </div>
          <div className={styles.inputButtonContainer}>
            <input
              className={styles.amountInput}
              value={inputValue[food.name]}
              onChange={(event) => amountHandler(event, food.name)}
              type="number"
            />
            <button
              className={styles.addButton}
              onClick={() => addHandler(food)}
            >
              + Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
