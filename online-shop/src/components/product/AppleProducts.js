
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/product/productSlice";
import { makeStyles } from "@material-ui/core";
import { URL } from "../../api/http";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    padding: "20px",
  },
});

function AppleProducts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (

    <div className={classes.page}>
      {productsList.map((product) => {
        return (
          <a href="http://localhost:3002/products?category=2">
            <img
              class="product-card__image"
              src={`${URL}/files/${product.image}`}
              alt="Product"
            />
            <p class="product-card__name">{product.name}</p>
            <div class="product-card__price-sale-container">
              <p class="product-card__price">{product.price}</p>
            </div>
          </a>
        );
      })}
 
    </div>
  )
}

export default AppleProducts;
