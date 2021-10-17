import Card from "../UI/Card";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  // since we havepayload ,we need to pass a data in the addItemToCart actions
  // what we dispatch depends on the item you set in the store file
  const addToCart = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
