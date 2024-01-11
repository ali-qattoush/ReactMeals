import { useContext } from "react";
import styles from "./CartModal.module.css";
import { CartContext } from "./CartProvider";

const CartModal = ({ modalHandler }) => {
  const { state, dispatch } = useContext(CartContext);

  const incrementQuantity = (index) => {
    dispatch({ type: "UPDATE", payload: { ...state[index], amount: 1 } });
  };

  const decrementQuantity = (index) => {
    if (state[index].amount === 1)
      dispatch({ type: "DELETE", payload: { ...state[index] } });
    dispatch({ type: "UPDATE", payload: { ...state[index], amount: -1 } });
  };

  const calculateTotal = () => {
    return state.reduce((currentTotal, currentItem) => {
      return currentTotal + currentItem.price * currentItem.amount;
    }, 0);
  };

  return (
    <div className={styles.cartModalContainer}>
      <button className={styles.closeButton} onClick={modalHandler}>
        Close
      </button>
      <h2 className={styles.cartHeader}>Shopping Cart</h2>
      <ul className={styles.cartItems}>
        {state.map((item, index) => (
          <li key={index} className={styles.cartItem}>
            <span className={styles.itemName}>{item.name}</span>
            <span className={styles.itemPrice}>${item.price}</span>
            <div className={styles.quantityButtons}>
              <button onClick={() => decrementQuantity(index)}>-</button>
              <span>{item.amount}</span>
              <button onClick={() => incrementQuantity(index)}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.totalSection}>
        <span className={styles.totalLabel}>Total:</span>
        <span className={styles.totalAmount}>
          ${calculateTotal().toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartModal;
