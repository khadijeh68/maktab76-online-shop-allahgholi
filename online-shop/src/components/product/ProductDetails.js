import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../../redux/features/product/productSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
 
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-details">
      <div>
        {productsList
          .filter((product) => product.id !== id)
          .map((product) => (
            <Card  key={product.id}>
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
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">افزودن به سبد خرید</Button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default ProductDetails;
