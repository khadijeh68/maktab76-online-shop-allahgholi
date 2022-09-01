import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../redux/features/product/productSlice";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  console.log(productsList);
  const p = productsList.filter((p) => p.id === id);

  const { image, name, os, weight, size, price, description } = p;
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-details mt-5">
      <div>
        {/* {productsList
          .filter((product) => product.id !== id)
          .map((product) => ( */}
        <Card>
          <Card.Img
            style={{ width: "100px" }}
            variant="top"
            src={`${URL}/files/${image}`}
            alt="mobile"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{os}</Card.Text>
            <Card.Text>{weight}</Card.Text>
            <Card.Text>{size}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary">افزودن به سبد خرید</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ProductDetails;
