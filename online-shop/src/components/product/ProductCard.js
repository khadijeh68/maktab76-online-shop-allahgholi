import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { fetchData } from "../../redux/features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/features/category/categorySlice";
import { BASE_URL } from "../../config/api";

const useStyles = makeStyles({
  page: {
    display: "inline-flex",
    alignItems: "center",
    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent: "center",
    margin: "20px",
    padding: "20px",
    fontFamily: "Vazir-Medium",
  },
  img: {
    width: "14rem",
    height: "28rem",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 20%)",
  
  },
});

function ProductCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categoryList = useSelector((state) => state.categories.categoryList);
 

  // {products.filter((product) => product.category === categoryList.id).map((product) => {

  return (
    <div>
      {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`} className="text-decoration-none">
            
            <div className={classes.page}> 
              <Card className={classes.img} >
                <Card.Img
                  style={{ width: "100px" }}
                  variant="top"
                  src={`${BASE_URL}/files/${product.image}`}
                  alt="mobile"
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.os}</Card.Text>
                  <Card.Text>{product.weight}</Card.Text>
                  <Card.Text>{product.size}</Card.Text>
                  <Card.Text>{product.price}</Card.Text>
                  <Button variant="primary" >افزودن به سبد خرید</Button>
                </Card.Body>
              </Card>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductCard;
