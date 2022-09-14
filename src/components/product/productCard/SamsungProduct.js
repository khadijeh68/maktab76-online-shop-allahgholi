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
import { digitsEnToFa } from "@persian-tools/persian-tools";

const useStyles = makeStyles({
  page: {
    display: "inline-flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Vazir-Medium",
    color: "black",
    textAlign:"center"
  },
  title: {
    textDecoration: "none",
    fontFamily: "Vazir-Medium",
    fontSize: "20px",
  },
  img: {
    width: "14rem",
    height: "20rem",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 6px rgb(0 0 0 / 20%)",
  },
});

function SamsungProduct() {
  const classes = useStyles();
  const [samsung, setSamsung] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getList("سامسونگ"))
      .unwrap()
      .then((res) => setSamsung(res));
  }, [dispatch]);

  return (
    <div>
      <div>
        <Link className={classes.title} to={`/categories/سامسونگ`} >
          سامسونگ
        </Link>
      </div>
      {samsung.map((product) => {
        return (
          <Link to={`/products/${product.id}`} key={product.id} className="text-decoration-none">
            <div className={classes.page}>
              <Card className={classes.img}>
                <Card.Img
                  style={{ width: "100px" }}
                  variant="top"
                  src={`${BASE_URL}/files/${product.image}`}
                  alt="mobile"
                />
                <Card.Body>
                  <Card.Text>{product.name}</Card.Text>
                  <Card.Text>{product.os}</Card.Text>
                  <Card.Text>{product.weight}</Card.Text>
                  <Card.Text>{product.size}</Card.Text>
                  <Card.Text>{digitsEnToFa(product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "،"))} تومان </Card.Text>
                  <Button  variant="outline-primary" size="sm">توضیحات بیشتر...</Button>
                </Card.Body>
              </Card>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SamsungProduct;
