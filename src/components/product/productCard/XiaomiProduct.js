import { makeStyles } from "@material-ui/core";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
    textAlign:"center",
    padding: "20px",
    fontFamily: "Vazir-Medium",
    color: "black"
  }, title:{
    textDecoration: "none",
    fontFamily: "Vazir-Medium",
    fontSize: "20px"
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

function XiaomiProduct() {
  const classes = useStyles();
  const [xiaomi, setXiaomi] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    dispatch(getList("شیائومی"))
      .unwrap()
      .then((res) => setXiaomi(res));
  }, [dispatch]);

  return (
    <div>
       <div>
      <Link className={classes.title} to={`/categories/شیائومی`}>شیائومی</Link>
        </div>
      {xiaomi.map((product) => {
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

export default XiaomiProduct;
