import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import bannerImage from "./assets/food1.jpg";
import styles from "./Banner.module.css";
import { useContext, useState } from "react";
import CartModal from "./CartModal";
import { CartContext } from "./CartProvider";

const Banner = () => {
  const [openModal, setOpenModal] = useState(false);
  const {state} = useContext(CartContext);

  function modalHandler() {
    setOpenModal(!openModal);
  }

  return (
    <>
      <div className={styles.bannerContainer}>
        <img className={styles.bannerImage} src={bannerImage} alt="Banner" />
      </div>
      <div className={styles.topBar}>
        <h1>ReactMeals</h1>
        <div className={styles.cartIconContainer} onClick={modalHandler}>
          <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
          <span className={styles.cartText}>Your Cart</span>
          <p className={styles.cartCount}>{state.length}</p>
        </div>
      </div>

      {openModal ? <CartModal modalHandler={modalHandler} /> : null}
    </>
  );
};

export default Banner;
