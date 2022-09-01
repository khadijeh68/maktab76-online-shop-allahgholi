import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/features/productDetail/productDetailSlice"
import "../../index.css"
import { BASE_URL } from "../../config/api";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState([]);
  console.log(product)

  useEffect(() => {
    dispatch(getDetails(id))
      .unwrap()
      .then((res) => setProduct(res));
  }, [dispatch, id]);

  return (
    <div className="product-details">
      <div>
        <Card>
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
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">افزودن به سبد خرید</Button>
          </Card.Body>
        </Card>
     

      </div>
    </div>
  );
}

export default ProductDetails;
