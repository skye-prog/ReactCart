import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
//cartIsvisible
// cart data got from
const Cart = (props) => {
  const CartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {CartItems.map((items) => {
          return (
            <CartItem
              key={items.id}
              item={{
                id: items.id,
                title: items.name,
                quantity: items.quantity,
                total: items.totalPrice,
                price: items.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
