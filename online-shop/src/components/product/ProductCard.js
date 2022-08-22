import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/product/productSlice";
import { makeStyles } from "@material-ui/core";
import {URL} from "../../api/http";


const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  padding:"20px"
  },
});

function ProductCard() {
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
          <Card style={{ width: "12rem" }} className="p-3 mx-3 d-flex flex-row" >
            <Card.Img variant="top" src={`${URL}/files/${product.image}`} alt="mobile" />
        
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
               {product.os}
              </Card.Text>
              <Card.Text>
               {product.weight}
              </Card.Text>
              <Card.Text>
               {product.size}
              </Card.Text>
              <Card.Text>
               {product.price}
              </Card.Text>
                  <Button variant="primary">افزودن به سبد خرید</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default ProductCard;
