import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { isshownActions } from "../../store";

const CartButton = (props) => {
  const badgeNumber = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const cartshownHandler = () => {
    dispatch(isshownActions.toggle());
  };
  return (
    <button onClick={cartshownHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeNumber}</span>
    </button>
  );
};

export default CartButton;
