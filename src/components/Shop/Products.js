import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const ProductItems = [
  { id: "p1", price: 6, title: "Skye", description: "first person" },
  { id: "p2", price: 9, title: "Pheobe", description: "second person" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ProductItems.map((items) => {
          return (
            <ProductItem
              key={items.id}
              id={items.id}
              title={items.title}
              price={items.price}
              description={items.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
