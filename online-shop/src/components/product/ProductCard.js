import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import { URL } from "../../api/http";
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  page: {
    display: "flex",
    alignItems: "center",
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
  const [productsList, setProductsList] = useState([]);

  const fetchData = () => {
    axios.get(`${URL}/products`).then((response) => {
      setProductsList(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const classes = useStyles();

  return (
    <div>
      {productsList.map((product) => {
        return (
          <Link to={`/products/${product.id}`} className="text-decoration-none">
            <div className={classes.page}>
              <Card className={classes.img} >
                <Card.Img
                  style={{ width: "100px" }}
                  variant="top"
                  src={`${URL}/files/${product.image}`}
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
