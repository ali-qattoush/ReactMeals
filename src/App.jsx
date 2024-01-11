import Banner from "./Banner";
import FoodList from "./FoodList";
import { CartProvider } from "./CartProvider";

function App() {
  const foodList = [
    {
      name: "Classic Burger",
      description: "Juicy beef patty with lettuce, tomato, and special sauce.",
      price: 9.99,
    },
    {
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, and basil on a thin crust.",
      price: 12.99,
    },
    {
      name: "Chicken Caesar Salad",
      description:
        "Grilled chicken, crisp romaine lettuce and Caesar dressing.",
      price: 8.99,
    },
    {
      name: "Vegetarian Sushi Roll",
      description: "Avocado, cucumber, and carrot rolled in seaweed and rice.",
      price: 10.99,
    },
  ];

  return (
    <CartProvider>
      <Banner />
      <FoodList foods={foodList} />
    </CartProvider>
  );
}

export default App;
