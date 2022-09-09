import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/features/productDetail/productDetailSlice";
import "../../index.css";
import { BASE_URL } from "../../config/api";
import { addToCart } from "../../redux/features/cart/cartSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    dispatch(getDetails(id))
      .unwrap()
      .then((res) => setProduct(res));
  }, [dispatch, id]);

  return (
    <div className="product-details">
      <div>
        <img
          className="mx-5 img-product-details"
          variant="top"
          src={`${BASE_URL}/files/${product.image}`}
          alt="mobile"
        />
      </div>
      <div>
        <h5>{product.name}</h5>
        <p>{`رنگ: ${product.color}`}</p>
        <p>{`قیمت: ${product.price}`}</p>
        <div className="d-flex flex-direction-row align-items-center">
          <div>تعداد: </div>
          <Button variant="success" size="sm" className="mx-2">
            +
          </Button>
          <div>{product.quantity}</div>
          <Button variant="warning" size="sm" className="mx-2">
            -
          </Button>
        </div>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
        <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
}

export default ProductDetails;
