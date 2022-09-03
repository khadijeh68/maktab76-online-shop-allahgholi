import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../../config/api";
import {
  getCategory,
  getList,
} from "../../../redux/features/fiestPage/firstPage";
const useStyles = makeStyles({
  page: {
    display: "inline-flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    margin: "20px",
    padding: "20px",
    fontFamily: "Vazir-Medium",
  },
  title: {
    textDecoration: "none",
    fontFamily: "Vazir-Medium",
    fontSize: "20px",
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

function HonorProduct() {
  const classes = useStyles();
  const [honor, setHonor] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getList(5))
      .unwrap()
      .then((res) => setHonor(res));
  }, [dispatch]);

  return (
    <div>
      <div>
        <Link className={classes.title} to={`/categories/5`}>
         آنر
        </Link>
      </div>
      {honor.map((product) => {
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="text-decoration-none"
          >
            <div className={classes.page}>
              <Card className={classes.img}>
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
                  <Button variant="primary">افزودن به سبد خرید</Button>
                </Card.Body>
              </Card>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HonorProduct;